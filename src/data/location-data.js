const data = [
	{
		name: 'New York',
		latitude: 40.712776,
		longitude: -74.005974,
	},
	{
		name: 'London',
		latitude: 51.507351,
		longitude: -0.127758,
	},
	{
		name: 'Tokyo',
		latitude: 35.689487,
		longitude: 139.691711,
	},
	{
		name: 'Paris',
		latitude: 48.856613,
		longitude: 2.352222,
	},
	{
		name: 'Sydney',
		latitude: -33.86882,
		longitude: 151.209296,
	},
	{
		name: 'Berlin',
		latitude: 52.520008,
		longitude: 13.404954,
	},
	{
		name: 'Moscow',
		latitude: 55.755825,
		longitude: 37.617298,
	},
	{
		name: 'Dubai',
		latitude: 25.204849,
		longitude: 55.270782,
	},
	{
		name: 'Singapore',
		latitude: 1.352083,
		longitude: 103.819839,
	},
	{
		name: 'Rio de Janeiro',
		latitude: -22.906847,
		longitude: -43.172897,
	},
	{
		name: 'Dhaka',
		latitude: 23.810331,
		longitude: 90.412521,
	},
	{
		name: 'Kolkata',
		latitude: 22.572645,
		longitude: 88.363892,
	},
	{
		name: 'Mumbai',
		latitude: 19.07609,
		longitude: 72.877426,
	},
	{
		name: 'Beijing',
		latitude: 39.904202,
		longitude: 116.407394,
	},
	{
		name: 'Los Angeles',
		latitude: 34.052235,
		longitude: -118.243683,
	},
];

function getLocations() {
	return data;
}

function getLocationByName(location) {
	// console.log(location);
	if (!location) return null;

	const filteredLocation = data.filter(
		(item) => item.name.toLowerCase() === location.toLowerCase()
	);
	// console.log(filteredLocation);
	if (filteredLocation.length > 0) return filteredLocation[0];

	return {
		name: '',
		latitude: 0,
		longitude: 0,
	};
}

export { getLocations, getLocationByName };
