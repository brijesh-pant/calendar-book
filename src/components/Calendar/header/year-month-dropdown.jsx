import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { monthList, yearList, _getSelectedMonthObj, _getSelectedYearObj } from '../../../util';

import Dropdown from '../dropdown';

class YearMonthDropdown extends Component {
	constructor() {
		super();
		this._onMonthChange = this._onMonthChange.bind(this);
		this._onYearChange = this._onYearChange.bind(this);
	}

	_getSelectedMonthAndYear = () => {
		const { currentMonth } = this.props;
		const month = currentMonth.format('M');
		const year = currentMonth.format('YYYY');
		const selectedMonth = _getSelectedMonthObj(month);
		const selectedYear = _getSelectedYearObj(year);
		return { selectedMonth, selectedYear };
	};

	_onMonthChange = ({ value: month = '' }) => {
		const {
			props: {
				currentMonth,
				history: { push: pushFn }
			}
		} = this;
		const year = currentMonth.format('YYYY');
		const to = { pathname: '/', search: `?month=${month}&year=${year}` };
		pushFn(to);
	};

	_onYearChange = ({ value: year = '' }) => {
		const {
			props: {
				currentMonth,
				history: { push: pushFn }
			}
		} = this;
		const month = currentMonth.format('M');
		const to = { pathname: '/', search: `?month=${month}&year=${year}` };
		pushFn(to);
	};

	render() {
		const { _onMonthChange, _onYearChange, _getSelectedMonthAndYear } = this;

		const { selectedMonth, selectedYear } = _getSelectedMonthAndYear();

		return (
			<div className="year-month-dropdown">
				<div className="row row-middle">
					<div className="col col-start month-dd">
						<Dropdown options={monthList} selectedOption={selectedMonth} handleChangeFn={_onMonthChange} />
					</div>
					<div className="col col-end year-dd">
						<Dropdown options={yearList} selectedOption={selectedYear} handleChangeFn={_onYearChange} />
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(YearMonthDropdown);
