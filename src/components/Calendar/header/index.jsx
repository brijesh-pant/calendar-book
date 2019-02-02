import React, { Component } from 'react';

import DayNames from './day-names';

import ArrowLeftIcon from '../../../images/arrow_left.svg';
import ArrowRightIcon from '../../../images/arrow_right.svg';

export default class Header extends Component {
	render() {
		return (
			<header>
				<div className="calendar-image" />
				<div className="row row-middle">
					<div className="col col-start">
						<ArrowLeftIcon className="arrow-left-icon" />
					</div>
					<div className="col col-center">
						<div className="date-day-month date">27</div>
						<div className="date-day-month day">saturday</div>
						<div className="date-day-month month">february 2018</div>
					</div>
					<div className="col col-end" onClick={this.nextMonth}>
						<ArrowRightIcon className="arrow-right-icon" />
					</div>
				</div>

				<DayNames />
			</header>
		);
	}
}
