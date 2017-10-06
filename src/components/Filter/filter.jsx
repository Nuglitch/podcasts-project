import React from 'react';
import PropTypes from 'prop-types';

import './filter.scss';

const Filter = ({count}) => (
	<div className="filter">
		<div className="count">{count}</div>
		<input className="input" placeholder="Filter podcasts..." />
	</div>
);

Filter.propTypes = {
	count: PropTypes.number.isRequired
};

export default Filter;
