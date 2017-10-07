import React from "react";
import { Link } from "react-router-dom";

import "./item-list.scss";

const ItemList = ({ img, name, author }) => {
	return (
		<div className="item-list">
			<img className="icon" src={img}/>
			<div className="name">{name}</div>
			<div className="author">Author: {author}</div>
		</div>
	);
};

export default ItemList;
