import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Day = props => {
	const {
		currentDate,
		day,
		day: { date, isCurrentMonth, isToday, number },
		onChangeDateFn
	} = props;

	const isTodayDate = isToday ? 'today' : '';
	const isDisabled = isCurrentMonth ? '' : 'disabled';
	const isSelected = date.isSame(currentDate) ? 'selected' : '';

	return (
		<div className={`col cell ${isTodayDate} ${isSelected} ${isDisabled}`} onClick={onChangeDateFn(day)}>
			<span key={date.toString()} className="date">
				{number}
			</span>
		</div>
	);
};

Day.propTypes = {
	day: PropTypes.shape({
		date: PropTypes.instanceOf(moment),
		isCurrentMonth: PropTypes.bool,
		isToday: PropTypes.bool,
		number: PropTypes.number
	}),
	currentDate: PropTypes.instanceOf(moment),
	onChangeDateFn: PropTypes.func
};

export default Day;
