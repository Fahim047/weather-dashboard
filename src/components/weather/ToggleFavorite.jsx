import HeartIcon from '../../assets/heart.svg';
import RedHeartIcon from '../../assets/heart-red.svg';
import { useContext, useEffect, useState } from 'react';
import { FavoriteContext, WeatherContext } from '../../context';
export default function ToggleFavorite() {
	const { favorites, addToFavorites, removeFromFavorites } =
		useContext(FavoriteContext);
	const { weatherData } = useContext(WeatherContext);
	const { latitude, longitude, location } = weatherData;

	const [isFavorite, setIsFavorite] = useState(false);

	useEffect(() => {
		const found = favorites.find(
			(favItem) => favItem.location === location
		);
		if (found) {
			setIsFavorite(true);
		}
	});

	const handleFavorite = () => {
		const found = favorites.find(
			(favItem) => favItem.location === location
		);
		if (!found) {
			addToFavorites(latitude, longitude, location);
		} else {
			removeFromFavorites(location);
		}
		setIsFavorite(!isFavorite);
	};

	return (
		<div className="md:col-span-2">
			<div className="flex items-center justify-end space-x-6">
				<button
					onClick={handleFavorite}
					className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
				>
					<img
						src={isFavorite ? RedHeartIcon : HeartIcon}
						alt="Favorite Icon"
					/>
				</button>
			</div>
		</div>
	);
}
