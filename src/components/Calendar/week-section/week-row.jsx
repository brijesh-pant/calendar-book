import React, { Component } from 'react';

import Day from './day';

export default class WeekRow extends Component {
	render() {
		return (
			<div className="row">
				{[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
					<Day key={index} />
				))}
			</div>
		);
	}
}
