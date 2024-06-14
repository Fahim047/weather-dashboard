import { useContext } from 'react';
import { WeatherContext } from '../../context';

import MaxTemp from '../../assets/icons/temp-max.svg';
import MinTemp from '../../assets/icons/temp-min.svg';
import Humidity from '../../assets/icons/humidity.svg';
import Cloud from '../../assets/icons/cloud.svg';
import Wind from '../../assets/icons/wind.svg';

export default function WeatherInfo() {
	const { weatherData } = useContext(WeatherContext);
	const {
		maxTemperature,
		minTemperature,
		humidity,
		wind,
		cloudPercentage,
		climate,
	} = weatherData;
	return (
		<div>
			<p className="text-sm lg:text-lg font-bold uppercase mb-8">
				The weather is {climate}
			</p>
			<ul className="space-y-6 lg:space-y-6">
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Temp max</span>
					<div className="inline-flex space-x-4">
						<p>{Math.round(maxTemperature)}°</p>
						<img src={MaxTemp} alt="temp-max" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Temp min</span>
					<div className="inline-flex space-x-4">
						<p>{Math.round(minTemperature)}°</p>
						<img src={MinTemp} alt="temp-min" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Humidity</span>
					<div className="inline-flex space-x-4">
						<p>{humidity}%</p>
						<img src={Humidity} alt="humidity" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Cloudy</span>
					<div className="inline-flex space-x-4">
						<p>{cloudPercentage}%</p>
						<img src={Cloud} alt="cloudy" />
					</div>
				</li>
				<li className="text-sm lg:text-lg flex items-center justify-between space-x-4">
					<span>Wind</span>
					<div className="inline-flex space-x-4">
						<p>{wind}k/h</p>
						<img src={Wind} alt="wind" />
					</div>
				</li>
			</ul>
		</div>
	);
}
