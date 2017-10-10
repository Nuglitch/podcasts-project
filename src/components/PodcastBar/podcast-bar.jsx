import React from 'react';

import MyLink from 'components/MyLink/my-link';
import './podcast-bar.scss';

const PodcastBar = ({ img, name, author, summary, url }) => {
	return (
		<div className="podcast-bar">
			<MyLink to={url}>
				<div className="icon">
					<img src={img} />
				</div>
			</MyLink>
			<MyLink to={url}>
				<div className="title-content">
					<div className="name">{name}</div>
					<div className="author">by {author}</div>
				</div>
			</MyLink>
			<div className="summary">
				<div className="title">Description:</div>
				<div className="text">{summary}</div>
			</div>
		</div>
	);
};

export default PodcastBar;
