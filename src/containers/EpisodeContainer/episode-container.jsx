import React from 'react';
import { connect } from 'react-redux';

import DataManager from 'services/data-manager';
import Episode from 'components/Episode/episode';

class EpisodeContainer extends React.Component {
	render() {
		const { podcastEpisodes, match } = this.props;
		const episode = DataManager.getItemByProp(
			podcastEpisodes,
			'id',
			match.params.episodeId
		);
		return (
			<div className="episode-container">
				<Episode
					title={episode.title}
					description={episode.description}
					enclosure={episode.enclosure}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		podcastEpisodes: state.podcastDetailReducer.podcastEpisodes
	};
};

export default connect(mapStateToProps)(EpisodeContainer);
