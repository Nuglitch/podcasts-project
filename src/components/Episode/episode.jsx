import React from 'react';

import './episode.scss';

const Episode = ({ title, description, enclosure }) => {
	return (
		<div className="episode">
			<div className="title">
				{title}
			</div>
			<div className="description" dangerouslySetInnerHTML={{__html: description}} />
			<audio controls className="audio-player">
				<source src={enclosure} type="audio/ogg" />
			</audio>
		</div>
	);
};

export default Episode;
