import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import WeekRow from './week-row';

const WeekSection = props => {
	const { currentMonth, currentDate, onChangeDateFn } = props;

	let weeks = [];
	let done = false;
	let date = currentMonth
		.clone()
		.startOf('month')
		.add('w' - 1)
		.day('Sunday');
	let count = 0;
	let monthIndex = date.month();

	while (!done) {
		weeks.push(
			<WeekRow
				index={weeks.length}
				key={date}
				date={date.clone()}
				currentMonth={currentMonth}
				currentDate={currentDate}
				onChangeDateFn={onChangeDateFn}
			/>
		);

		date.add(1, 'w');

		done = count++ > 2 && monthIndex !== date.month();
		monthIndex = date.month();
	}

	return <section>{weeks}</section>;
};

WeekSection.propTypes = {
	currentMonth: PropTypes.instanceOf(moment),
	currentDate: PropTypes.instanceOf(moment),
	onChangeDateFn: PropTypes.func
};

export default WeekSection;
