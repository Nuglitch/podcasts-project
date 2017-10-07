import React from "react";

import ItemList from "components/ItemList/item-list";
import './item-list-container.scss';

class ItemListContainer extends React.Component {
	render() {
		return (
			<div className="item-list-container">
				<ItemList
					img="http://is2.mzstatic.com/image/thumb/Podcasts118/v4/7d/4c/07/7d4c07d0-f8bd-05b8-5f5e-1ee2f990e5f7/mza_1307640737233665887.png/55x55bb-85.jpg"
					name="Song Exploder"
					author="Song Exploder"
				/>
			</div>
		);
	}
}

export default ItemListContainer;
