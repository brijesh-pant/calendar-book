export const monthList = [
	{ value: '1', label: 'January' },
	{ value: '2', label: 'February' },
	{ value: '3', label: 'March' },
	{ value: '4', label: 'April' },
	{ value: '5', label: 'May' },
	{ value: '6', label: 'June' },
	{ value: '7', label: 'July' },
	{ value: '8', label: 'August' },
	{ value: '9', label: 'September' },
	{ value: '10', label: 'October' },
	{ value: '11', label: 'November' },
	{ value: '12', label: 'December' }
];

let list = [];
for (let i = 1970; i < 2051; i++) {
	list.push({ value: i, label: i });
}
export const yearList = list;

export const _getSelectedMonthObj = month => {
	return monthList.find(({ value }) => value === month) || '';
};

export const _getSelectedYearObj = year => {
	return yearList.find(({ value }) => value === parseInt(year)) || '';
};

export const _validateUrl = (month, year) => {
	// https://stackoverflow.com/questions/17547710/javascript-regex-validate-years-in-range
	const isValidYear = /^(19[7-9]\d|20[0-4]\d|2050)$/.test(year);
	const isValidMonth = /^[0-9][0-1]?$|^12$/.test(Math.abs(month));
	return !(isValidYear && isValidMonth);
};
