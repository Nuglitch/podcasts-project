import React from 'react';
import { connect } from 'react-redux';

import PodcastBar from 'components/PodcastBar/podcast-bar';
import PodcastsList from '../../services/podcasts-list';
import './podcast-bar-container.scss';

class PodcastBarContainer extends React.Component {
	render() {
		const { podcast, podcasts } = this.props;
		const { name, img, author, id } = podcast;
		const itemList = PodcastsList.load(podcasts, 'id', id);
		return (
			<div className="podcast-bar-container">
				<PodcastBar
					img={img}
					name={name}
					author={author}
					summary={itemList.summary}
				/>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		podcasts: state.podcastsListReducer.podcasts
	};
};

export default connect(mapStateToProps)(PodcastBarContainer);
