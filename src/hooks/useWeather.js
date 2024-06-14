import { useState, useEffect, useContext } from 'react';
import { LocationContext } from '../context';

const useWeather = () => {
	const [weatherData, setWeatherData] = useState({
		location: '',
		climate: '',
		temperature: '',
		maxTemperature: '',
		minTemperature: '',
		humidity: '',
		wind: '',
		cloudPercentage: '',
		time: '',
		longitude: '',
		latitude: '',
	});
	const [loading, setLoading] = useState({
		isLoading: false,
		message: '',
	});
	const [error, setError] = useState(null);

	const { selectedLocation } = useContext(LocationContext);
	// console.log(selectedLocation);

	const fetchWeatherData = async (latitude, longitude) => {
		try {
			setLoading({
				...loading,
				isLoading: true,
				message: 'Fetching weather data...',
			});

			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${
					import.meta.env.VITE_WEATHER_API_KEY
				}&units=metric`
			);
			if (!response.ok) {
				const errorMessage = `Fetching weather data failed: ${response.status}`;
				throw new Error(errorMessage);
			}

			const data = await response.json();
			// console.log(data);
			const updatedWeatherData = {
				...weatherData,
				location: data?.name,
				climate: data?.weather[0]?.main,
				temperature: data?.main?.temp,
				maxTemperature: data?.main?.temp_max,
				minTemperature: data?.main?.temp_min,
				humidity: data?.main?.humidity,
				wind: data?.wind?.speed,
				cloudPercentage: data?.clouds?.all,
				time: data?.dt,
				longitude,
				latitude,
			};
			// console.log(updatedWeatherData);
			setWeatherData(updatedWeatherData);
		} catch (err) {
			setError(err);
		} finally {
			setLoading({
				...loading,
				isLoading: false,
				message: '',
			});
		}
	};

	useEffect(() => {
		setLoading({
			...loading,
			isLoading: true,
			message: 'Finding Location...',
		});
		if (selectedLocation.latitude && selectedLocation.longitude) {
			fetchWeatherData(
				selectedLocation.latitude,
				selectedLocation.longitude
			);
		} else {
			navigator.geolocation.getCurrentPosition((position) => {
				fetchWeatherData(
					position.coords.latitude,
					position.coords.longitude
				);
			});
		}
	}, [selectedLocation.latitude, selectedLocation.longitude]);
	return {
		weatherData,
		loading,
		error,
	};
};

export default useWeather;
