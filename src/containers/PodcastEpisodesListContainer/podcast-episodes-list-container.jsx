import React from 'react';
import PropTypes from 'prop-types';
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

PodcastEpisodesListContainer.propTypes = {
	podcastEpisodes: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string,
			description: PropTypes.string,
			pubDate: PropTypes.string,
			duration: PropTypes.string,
			enclosure: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired,
	match: PropTypes.object.isRequired
};

const mapStateToProps = state => {
	return {
		podcastEpisodes: state.podcastDetailReducer.podcastEpisodes
	};
};

export default connect(mapStateToProps)(PodcastEpisodesListContainer);
