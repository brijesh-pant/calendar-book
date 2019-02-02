import React, { Component } from 'react';

import DayNames from './day-names';

import ArrowLeftIcon from '../../../images/arrow_left.svg';
import ArrowRightIcon from '../../../images/arrow_right.svg';

export default class Header extends Component {
	render() {
		return (
			<header className="row row-middle">
				<div className="col col-start">
					<ArrowLeftIcon className="arrow-left-icon" />
				</div>
				<div className="col col-center">
					<span>Feb 2018</span>
				</div>
				<div className="col col-end" onClick={this.nextMonth}>
					<ArrowRightIcon className="arrow-right-icon" />
				</div>

				<DayNames />
			</header>
		);
	}
}
