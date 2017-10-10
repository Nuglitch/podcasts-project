import React from 'react';
import { connect } from 'react-redux';

import PodcastEpisodesList from 'components/PodcastEpisodesList/podcast-episodes-list';

class PodcastEpisodesListContainer extends React.Component {

	render() {
		const { podcastEpisodes, match } = this.props;
		return (
			<div className="podcast-episodes-list-container">
				<PodcastEpisodesList episodes={podcastEpisodes} url={match.url}/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		podcastEpisodes: state.podcastDetailReducer.podcastEpisodes
	};
};

export default connect(mapStateToProps)(PodcastEpisodesListContainer);
