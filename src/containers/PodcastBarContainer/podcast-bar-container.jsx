import React from 'react';

import PodcastBar from 'components/PodcastBar/podcast-bar';
import './podcast-bar-container.scss';

class PodcastBarContainer extends React.Component {
	render() {
		const { name, img, author, summary } =  this.props.podcast;
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

export default PodcastBarContainer;
