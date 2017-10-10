import React from 'react';
import PropTypes from 'prop-types';
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
		if (!episode) {
			console.log('Episode not found');
			return null;
		}
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

EpisodeContainer.propTypes = {
	podcastEpisodes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			enclosure: PropTypes.string
		})
	).isRequired,
	match: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		podcastEpisodes: state.podcastDetailReducer.podcastEpisodes
	};
};

export default connect(mapStateToProps)(EpisodeContainer);
