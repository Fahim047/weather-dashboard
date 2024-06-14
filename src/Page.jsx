import { useContext, useEffect, useState } from 'react';
import Header from './components/header/Header';
import WeatherBoard from './components/weather/WeatherBoard';
import { WeatherContext } from './context';

import ClearSkyImage from './assets/backgrounds/clear-sky.jpg';
import FewCloudsImage from './assets/backgrounds/few-clouds.jpg';
import RainyDayImage from './assets/backgrounds/rainy-day.jpg';
import SnowImage from './assets/backgrounds/snow.jpg';
import SunnyImage from './assets/backgrounds/sunny.jpg';
import ThunderStormImage from './assets/backgrounds/thunderstorm.jpg';
import MistImage from './assets/backgrounds/mist.jpeg';
import WinterImage from './assets/backgrounds/winter.jpg';

const Page = () => {
	const { weatherData, loading } = useContext(WeatherContext);
	const [backgroundImage, setBackgroundImage] = useState('');

	function getBackgroundImage(climate) {
		switch (climate) {
			case 'Rain':
				return RainyDayImage;
			case 'Clouds':
				return FewCloudsImage;
			case 'Clear':
				return SunnyImage;
			case 'Snow':
				return SnowImage;
			case 'Haze':
				return MistImage;
			case 'Thunder':
				return RainyDayImage;
			case 'Mist':
				return MistImage;
			case 'Fog':
				return MistImage;
			default:
				return SunnyImage;
		}
	}
	useEffect(() => {
		const bgImage = getBackgroundImage(weatherData.climate);
		setBackgroundImage(bgImage);
	}, [weatherData.climate]);
	return (
		<>
			{loading.isLoading ? (
				<div className="w-full h-screen bg-gray-800 flex justify-center items-start">
					<p className="text-white text-3xl p-10">
						{loading.message}
					</p>
				</div>
			) : (
				<div
					style={{ backgroundImage: `url(${backgroundImage})` }}
					className="grid place-items-center h-screen bg-cover bg-no-repeat"
				>
					<Header />
					<main>
						<section>
							<WeatherBoard />
						</section>
					</main>
				</div>
			)}
		</>
	);
};

export default Page;
