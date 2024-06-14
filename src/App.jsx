import Page from './Page';
import {
	WeatherProvider,
	FavoriteProvider,
	LocationProvider,
} from './provider';

export default function App() {
	return (
		<LocationProvider>
			<WeatherProvider>
				<FavoriteProvider>
					<Page />
				</FavoriteProvider>
			</WeatherProvider>
		</LocationProvider>
	);
}
