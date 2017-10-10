import React from 'react';
import PropTypes from 'prop-types';

import PodcastBar from 'components/PodcastBar/podcast-bar';
import './podcast-bar-container.scss';

class PodcastBarContainer extends React.Component {
	render() {
		const { name, img, author, summary } = this.props.podcast;
		return (
			<div className="podcast-bar-container">
				<PodcastBar
					img={img}
					name={name}
					author={author}
					summary={summary}
					url={this.props.url}
				/>
			</div>
		);
	}
}

PodcastBarContainer.propTypes = {
	podcast: PropTypes.shape({
		img: PropTypes.string,
		name: PropTypes.string,
		author: PropTypes.string,
		summary: PropTypes.string
	}).isRequired,
	url: PropTypes.string.isRequired
};

export default PodcastBarContainer;
