import { FavoriteContext } from '../context';
import { useLocalStorage } from '../hooks';

const FavoriteProvider = ({ children }) => {
	const [favorites, setFavorites] = useLocalStorage('favorites', []);

	const addToFavorites = (latitude, longitude, location) => {
		setFavorites([
			...favorites,
			{
				latitude,
				longitude,
				location,
			},
		]);
	};

	const removeFromFavorites = (location) => {
		const newFavorites = favorites.filter(
			(item) => item.location !== location
		);
		setFavorites(newFavorites);
	};
	return (
		<FavoriteContext.Provider
			value={{ favorites, addToFavorites, removeFromFavorites }}
		>
			{children}
		</FavoriteContext.Provider>
	);
};

export default FavoriteProvider;
