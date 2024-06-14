function getFormattedDate(value, type, inMs) {
	if (!type) {
		return value;
	}

	if (!inMs) {
		value = value * 1000;
	}

	const date = new Date();

	let options;

	if (type === 'date') {
		options = {
			weekDay: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		};
	} else if (type === 'time') {
		options = {
			hour: 'numeric',
			minute: 'numeric',
		};
	}

	return new Intl.DateTimeFormat('en-us', options).format(date);
}

export { getFormattedDate };
