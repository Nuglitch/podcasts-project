import React from 'react';
import { connect } from 'react-redux';

import FilterContainer from 'containers/FilterContainer/filter-container';
import PodcastsListContainer from 'containers/PodcastsListContainer/podcasts-list-container';
import { fetchPodcastsList } from 'actions/podcasts-list.actions';
import PodcastsList from 'services/podcasts-list';

class Home extends React.Component {
	componentWillMount() {
		this.props.fetchPodcastsList();
	}

	render() {
		let { podcasts, filter } = this.props;
		podcasts = PodcastsList.filterByText(podcasts, filter, [
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

const mapStateToProps = state => {
	return {
		podcasts: state.podcastsListReducer.podcasts,
		filter: state.podcastsListReducer.filter
	};
};

export default connect(mapStateToProps, { fetchPodcastsList })(Home);
