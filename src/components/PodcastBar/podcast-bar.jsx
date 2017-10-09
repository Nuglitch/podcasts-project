import React from 'react';

import './podcast-bar.scss';

const PodcastBar = ({ img, name, author, summary }) => {
	return (
		<div className="podcast-bar">
			<div className="icon">
				<img src={img} />
			</div>
			<div className="title-content">
				<div className="name">{name}</div>
				<div className="author">by {author}</div>
			</div>
			<div className="summary">
				<div className="title">Description:</div>
				<div className="text">{summary}</div>
			</div>
		</div>
	);
};

export default PodcastBar;
