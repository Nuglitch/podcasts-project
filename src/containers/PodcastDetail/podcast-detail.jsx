import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { fetchPodcastsDetail } from 'actions/podcast-detail.actions';
import PodcastBarContainer from 'containers/PodcastBarContainer/podcast-bar-container';
import DataManager from 'services/data-manager';
import PodcastEpisodesListContainer from 'containers/PodcastEpisodesListContainer/podcast-episodes-list-container';
import EpisodeContainer from 'containers/EpisodeContainer/episode-container';
import './podcast-detail.scss';

class PodcastDetail extends React.Component {
	componentWillMount() {
		this.props.fetchPodcastsDetail(this.props.match.params.podcastId);
	}

	render() {
		const { podcasts, match } = this.props;
		const podcast = DataManager.getItemByProp(podcasts, 'id', match.params.podcastId);
		if (!podcast) {
			console.log('Podcast not found.');
			return <div>Podcast not found.</div>;
		}
		return (
			<div className="podcast-detail-page-container">
				<PodcastBarContainer podcast={ podcast } url={match.url}/>
				<div className="routes-container">
					<Route exact path={match.url} component={PodcastEpisodesListContainer} />
					<Route exact path={`${match.url}/episode/:episodeId`} component={EpisodeContainer} />
				</div>
			</div>
		);
	}
}

PodcastDetail.propTypes = {
	podcasts: PropTypes.arrayOf(
		PropTypes.shape({
			img: PropTypes.string,
			name: PropTypes.string,
			author: PropTypes.string,
			summary: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired,
	match: PropTypes.object.isRequired,
	fetchPodcastsDetail: PropTypes.func.isRequired
};

const mapStateToProps = state => {
	return {
		podcasts: state.podcastsListReducer.podcasts
	};
};

export default connect(mapStateToProps, { fetchPodcastsDetail })(PodcastDetail);
