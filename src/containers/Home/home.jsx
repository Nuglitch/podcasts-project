import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FilterContainer from 'containers/FilterContainer/filter-container';
import PodcastsListContainer from 'containers/PodcastsListContainer/podcasts-list-container';
import DataManager from 'services/data-manager';

class Home extends React.Component {

	render() {
		let { podcasts, filter } = this.props;
		podcasts = DataManager.filterByText(podcasts, filter, [
			'name',
			'author'
		]);
		return (
			<div className="main-page-container">
				<FilterContainer count={podcasts.length} />
				<PodcastsListContainer podcasts={podcasts} />
			</div>
		);
	}
}

Home.propTypes = {
	podcasts: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string,
			name: PropTypes.string,
			author: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired,
	filter: PropTypes.string.isRequired
};

const mapStateToProps = state => {
	return {
		podcasts: state.podcastsListReducer.podcasts,
		filter: state.podcastsListReducer.filter
	};
};

export default connect(mapStateToProps)(Home);
