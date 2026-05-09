export const normalizeToDay = (dateInput) => {
	const date = new Date(dateInput);
	date.setHours(0, 0, 0, 0);
	return date;
};
