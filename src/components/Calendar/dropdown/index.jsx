import React from 'react';
import PropTypes from 'prop-types';
import DropdownSelect from 'react-select';

const Dropdown = ({ selectedOption, options, handleChangeFn }) => (
	<div className="dropdown">
		<DropdownSelect
			classNamePrefix="react-select"
			className="react-select-container"
			value={selectedOption}
			options={options}
			onChange={handleChangeFn}
		/>
	</div>
);

Dropdown.propTypes = {
	selectedOption: PropTypes.shape({
		label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
		value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
	}),
	options: PropTypes.arrayOf(
		PropTypes.shape({
			label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		})
	),
	handleChangeFn: PropTypes.func
};

export default Dropdown;
