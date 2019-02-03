import React, { Component } from 'react';
import moment from 'moment';

import Header from './header';
import WeekSection from './week-section';

export default class Calendar extends Component {
	constructor() {
		super();
		const currentMonth = moment();
		const currentDate = moment().startOf('day');
		this.state = {
			loader: true,
			currentMonth,
			currentDate
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loader: false
			});
		}, 1000);
	}

	_goToPreviousMonth = () => {
		this.setState(prevState => ({
			currentMonth: prevState.currentMonth.subtract(1, 'month')
		}));
	};

	_goToNextMonth = () => {
		this.setState(prevState => ({
			currentMonth: prevState.currentMonth.add(1, 'month')
		}));
	};

	_onChangeDate = day => () => {
		this.setState({
			currentDate: day.date,
			currentMonth: day.date.clone()
		});
	};

	render() {
		const {
			state: { currentMonth, currentDate, loader },
			_goToPreviousMonth,
			_goToNextMonth,
			_onChangeDate
		} = this;

		if (loader) {
			return null;
		}

		return (
			<div className="wrapper">
				<Header currentMonth={currentMonth} goToPreviousMonthFn={_goToPreviousMonth} goToNextMonthFn={_goToNextMonth} />

				<WeekSection currentMonth={currentMonth} currentDate={currentDate} onChangeDateFn={_onChangeDate} />
			</div>
		);
	}
}
