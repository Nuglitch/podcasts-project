import React from 'react';
import PropTypes from 'prop-types';

import './item-list.scss';

const ItemList = ({ img, name, author }) => {
	return (
		<div className="item-list">
			<img className="icon" src={img} />
			<div className="name">{name}</div>
			<div className="author">Author: {author}</div>
		</div>
	);
};

ItemList.propTypes = {
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired
};

export default ItemList;
