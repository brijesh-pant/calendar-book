import React, { Component } from 'react';

import WeekRow from './week-row';

export default class WeekSection extends Component {
	render() {
		return (
			<section>
				{[1, 2, 3, 4, 5].map((week, index) => (
					<WeekRow key={index} />
				))}
			</section>
		);
	}
}
