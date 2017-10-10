import React from 'react';
import PropTypes from 'prop-types';

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

Episode.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	enclosure: PropTypes.string.isRequired
};

export default Episode;
