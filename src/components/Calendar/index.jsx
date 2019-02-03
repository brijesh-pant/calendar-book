import React, { Component } from 'react';
import moment from 'moment';
import { withRouter, Redirect } from 'react-router';
import qs from 'query-string';

import Header from './header';
import WeekSection from './week-section';

import { _getSelectedMonthObj, _getSelectedYearObj, _validateUrl } from '../../util';

class Calendar extends Component {
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
		const { props, _initMonthAndYear } = this;
		_initMonthAndYear(props);

		setTimeout(() => {
			this.setState({
				loader: false
			});
		}, 1000);
	}

	componentWillReceiveProps(nextProps) {
		const {
			props: {
				location: { search: prevSearch }
			},
			_initMonthAndYear
		} = this;
		const {
			location: { search: nextSearch }
		} = nextProps;

		const { month: prevMonth = '', year: prevYear = '' } = qs.parse(prevSearch);
		const { month: nextMonth = '', year: nextYear = '' } = qs.parse(nextSearch);
		if (prevMonth !== nextMonth || prevYear !== nextYear) {
			_initMonthAndYear(nextProps);
		}
	}

	_initMonthAndYear = props => {
		const {
			location: { search }
		} = props;
		const { currentMonth } = this.state;
		let { month = '', year = '' } = qs.parse(search);

		if (!month || month.length === 0) {
			month = currentMonth.format('M');
		}
		month = month - currentMonth.format('M');
		if (!year || year.length === 0) {
			year = currentMonth.format('YYYY');
		}

		const isInvalidUrl = _validateUrl(month, year);
		if (isInvalidUrl) {
			window.location.href = '/';
		}

		const currentMonthUpdated = currentMonth
			.clone()
			.add(month, 'months')
			.year(year);

		this.setState({
			currentMonth: currentMonthUpdated
		});
	};

	_goToPreviousOrNextMonth = monthAndYear => {
		const {
			props: {
				history: { push: pushFn }
			}
		} = this;
		const month = monthAndYear.format('M');
		const year = monthAndYear.format('YYYY');
		const to = { pathname: '/', search: `?month=${month}&year=${year}` };
		pushFn(to);
	};

	_goToPreviousMonth = () => {
		const { currentMonth } = this.state;
		const prevMonthAndYear = currentMonth.clone().subtract(1, 'month');
		this._goToPreviousOrNextMonth(prevMonthAndYear);
	};

	_goToNextMonth = () => {
		const { currentMonth } = this.state;
		const nextMonthAndYear = currentMonth.clone().add(1, 'month');
		this._goToPreviousOrNextMonth(nextMonthAndYear);
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

export default withRouter(Calendar);
