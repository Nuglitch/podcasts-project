import React from 'react';
import { connect } from 'react-redux';

import { fetchPodcastsDetail } from 'actions/podcast-detail.actions';
import PodcastBarContainer from 'containers/PodcastBarContainer/podcast-bar-container';

class PodcastDetail extends React.Component {
	componentWillMount() {
		this.props.fetchPodcastsDetail(this.props.match.params.podcastId);
	}

	render() {
		// let { podcasts, filter } = this.props;
		// podcasts = PodcastsList.filterByText(podcasts, filter, [
		// 	'name',
		// 	'author'
		// ]);
		let { podcast, match } = this.props;
		podcast.id = match.params.podcastId;
		return (
			<div className="podcast-detail-page-container">
				<PodcastBarContainer podcast={ podcast }/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		podcast: state.podcastDetailReducer.podcast
	};
};

export default connect(mapStateToProps, { fetchPodcastsDetail })(PodcastDetail);
