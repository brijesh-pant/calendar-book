import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import Day from './day';

const WeekRow = props => {
	let days = [];
	let { date } = props;
	const { index, currentMonth, currentDate, onChangeDateFn } = props;

	for (let i = 0; i < 7; i++) {
		let day = {
			name: date.format('dd').substring(0, 1),
			number: date.date(),
			isCurrentMonth: date.month() === currentMonth.month(),
			isToday: date.isSame(new Date(), 'day'),
			date
		};

		days.push(<Day key={`${index}${i}`} day={day} currentDate={currentDate} onChangeDateFn={onChangeDateFn} />);

		date = date.clone();
		date.add(1, 'day');
	}

	return <div className="row week-row">{days}</div>;
};

WeekRow.propTypes = {
	date: PropTypes.instanceOf(moment),
	index: PropTypes.number,
	currentMonth: PropTypes.instanceOf(moment),
	currentDate: PropTypes.instanceOf(moment),
	onChangeDateFn: PropTypes.func
};

export default WeekRow;
