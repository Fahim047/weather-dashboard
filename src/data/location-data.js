const data = [
	{
		name: 'Central Park',
		latitude: 40.785091,
		longitude: -73.968285,
	},
	{
		name: 'Eiffel Tower',
		latitude: 48.858844,
		longitude: 2.294351,
	},
	{
		name: 'Great Wall of China',
		latitude: 40.431908,
		longitude: 116.570374,
	},
	{
		name: 'Sydney Opera House',
		latitude: -33.856784,
		longitude: 151.215297,
	},
	{
		name: 'Christ the Redeemer',
		latitude: -22.951916,
		longitude: -43.210487,
	},
	{
		name: 'Mount Everest',
		latitude: 27.988121,
		longitude: 86.925026,
	},
	{
		name: 'Pyramids of Giza',
		latitude: 29.979235,
		longitude: 31.134202,
	},
	{
		name: 'Taj Mahal',
		latitude: 27.175015,
		longitude: 78.042155,
	},
	{
		name: 'Statue of Liberty',
		latitude: 40.689247,
		longitude: -74.044502,
	},
	{
		name: 'Machu Picchu',
		latitude: -13.163141,
		longitude: -72.544963,
	},
];

function getLocations() {
	return data;
}

function getLocationByName(location) {
	// console.log(location);
	if (!location) return null;

	const filteredLocation = data.filter(
		(item) => item.name === location.toLowerCase()
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
