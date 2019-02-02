import React from 'react';

const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const DayNames = () => (
	<div className="row">
		{daysList.map((dayName, index) => (
			<div key={index} className="col col-center">
				{dayName}
			</div>
		))}
	</div>
);

export default DayNames;
