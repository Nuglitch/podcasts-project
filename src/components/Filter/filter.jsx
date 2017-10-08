import React from 'react';
import PropTypes from 'prop-types';

import './filter.scss';

const Filter = ({ count, setFilterValue }) => (
	<div className="filter">
		<div className="count">{count}</div>
		<input
			className="input"
			placeholder="Filter podcasts..."
			onChange={setFilterValue}
		/>
	</div>
);

Filter.propTypes = {
	count: PropTypes.number.isRequired
};

export default Filter;
