import React from 'react';
import PropTypes from 'prop-types';

import ItemListContainer from 'containers/ItemListContainer/item-list-container';

class PodcastsListContainer extends React.Component {
	render() {
		return (
			<div className="podcasts-list-container">
				{this.props.podcasts.map((p, k) => (
					<ItemListContainer key={k} podcast={p} />
				))}
			</div>
		);
	}
}

PodcastsListContainer.propTypes = {
	podcasts: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string,
			img: PropTypes.string,
			author: PropTypes.string,
			summary: PropTypes.string,
			id: PropTypes.string
		})
	).isRequired
};

export default PodcastsListContainer;
