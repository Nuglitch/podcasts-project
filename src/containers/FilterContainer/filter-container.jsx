import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Filter from 'components/Filter/filter';
import { setListFilter } from 'actions/podcasts-list.actions';
import './filter-container.scss';

class FilterContainer extends React.Component {
	setFilterValue(e) {
		this.props.setListFilter(e.target.value);
	}

	render() {
		return (
			<div className="filter-container">
				<Filter
					count={this.props.count}
					setFilterValue={this.setFilterValue.bind(this)}
				/>
			</div>
		);
	}
}

FilterContainer.propTypes = {
	count: PropTypes.number.isRequired,
	setListFilter: PropTypes.func.isRequired
};

export default connect(null, { setListFilter })(FilterContainer);
