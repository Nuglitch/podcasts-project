import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchPodcastsDetail } from 'actions/podcast-detail.actions';
import PodcastBarContainer from 'containers/PodcastBarContainer/podcast-bar-container';
import PodcastsList from '../../services/podcasts-list';
import PodcastEpisodesListContainer from 'containers/PodcastEpisodesListContainer/podcast-episodes-list-container';
import './podcast-detail.scss';

class PodcastDetail extends React.Component {
	componentWillMount() {
		this.props.fetchPodcastsDetail(this.props.match.params.podcastId);
	}

	render() {
		const { podcasts, match } = this.props;
		const podcast = PodcastsList.load(podcasts, 'id', match.params.podcastId);
		return (
			<div className="podcast-detail-page-container">
				<PodcastBarContainer podcast={ podcast }/>
				<Route exact path={match.url} component={PodcastEpisodesListContainer} />
				<Route exact path={`${match.url}/episode/:episodeId`} component={PodcastEpisodesListContainer} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		podcasts: state.podcastsListReducer.podcasts
	};
};

export default connect(mapStateToProps, { fetchPodcastsDetail })(PodcastDetail);
