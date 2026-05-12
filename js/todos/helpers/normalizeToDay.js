export const normalizeToDay = (dateInput) => {
	const date = new Date(dateInput);
	if (Number.isNaN(date.getTime())) {
		return null;
	}
	date.setHours(0, 0, 0, 0);
	return date;
};
