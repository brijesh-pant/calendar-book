import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import DayNames from './day-names';

import ArrowLeftIcon from '../../../images/arrow_left.svg';
import ArrowRightIcon from '../../../images/arrow_right.svg';

const Header = ({ currentMonth, goToPreviousMonthFn, goToNextMonthFn }) => (
	<header>
		<div className="calendar-image" />
		<div className="row row-middle">
			<div className="col col-start" onClick={goToPreviousMonthFn}>
				<ArrowLeftIcon className="arrow-left-icon" />
			</div>
			<div className="col col-center">
				<div className="date-day-month date">{currentMonth.format('D')}</div>
				<div className="date-day-month day">{currentMonth.format('dddd')}</div>
				<div className="date-day-month month">{currentMonth.format('MMMM YYYY')}</div>
			</div>
			<div className="col col-end" onClick={goToNextMonthFn}>
				<ArrowRightIcon className="arrow-right-icon" />
			</div>
		</div>

		<DayNames />
	</header>
);

Header.propTypes = {
	currentMonth: PropTypes.instanceOf(moment),
	goToPreviousMonthFn: PropTypes.func,
	goToNextMonthFn: PropTypes.func
};

export default Header;
