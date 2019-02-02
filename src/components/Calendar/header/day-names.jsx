import React, { Component } from 'react';

export default class DayNames extends Component {
	constructor() {
		super();
		this.state = {
			daysList: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
		};
	}

	render() {
		const {
			state: { daysList }
		} = this;

		return (
			<div className="row day-names">
				{daysList.map((dayName, index) => (
					<div key={index} className="col col-center">
						{dayName}
					</div>
				))}
			</div>
		);
	}
}
