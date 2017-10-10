import React from 'react';

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

export default PodcastsListContainer;
