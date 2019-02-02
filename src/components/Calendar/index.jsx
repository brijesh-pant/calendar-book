import React, { Component } from 'react';

import Header from './header';
import WeekSection from './week-section';

export default class Calendar extends Component {
	render() {
		return (
			<div className="wrapper">
				<Header />
				<WeekSection />
			</div>
		);
	}
}
