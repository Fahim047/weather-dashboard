import { useContext } from 'react';
import { WeatherContext } from '../../context';
import LocationIcon from '../../assets/pin.svg';
import { getFormattedDate } from '../../utils/date-time';

import CloudIcon from '../../assets/icons/cloud.svg';
import HumidityIcon from '../../assets/icons/humidity.svg';
import WindIcon from '../../assets/icons/wind.svg';
import SnowIcon from '../../assets/icons/snow.svg';
import SunnyIcon from '../../assets/icons/sunny.svg';
import RainIcon from '../../assets/rainy.svg';
import HazeIcon from '../../assets/haze.svg';
export default function WeatherHeadLine() {
	const { weatherData } = useContext(WeatherContext);
	const { climate, temperature, location, time } = weatherData;

	function getWeatherIcon() {
		switch (climate) {
			case 'Rain':
				return RainIcon;
			case 'Clouds':
				return CloudIcon;
			case 'Clear':
				return SunnyIcon;
			case 'Snow':
				return SnowIcon;
			case 'Haze':
				return HazeIcon;
			case 'Thunder':
				return RainIcon;
			case 'Mist':
				return HazeIcon;
			case 'Fog':
				return HazeIcon;
			default:
				return SunnyIcon;
		}
	}
	return (
		<div>
			<div className="max-md:flex items-center justify-between md:-mt-10">
				<img src={getWeatherIcon(climate)} alt="cloud" />
				<div className="max-md:flex items-center max-md:space-x-4">
					<h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
						{temperature}°
					</h1>
					<div className="flex items-center space-x-4 md:mb-4">
						<img src={LocationIcon} alt="location" />
						<h2 className="text-2xl lg:text-[50px]">{location}</h2>
					</div>
				</div>
			</div>
			<p className="text-sm lg:text-lg">
				{getFormattedDate(time, 'time', false)} -{' '}
				{getFormattedDate(time, 'date', false)}
			</p>
		</div>
	);
}
