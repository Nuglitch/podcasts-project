import React from 'react';

import MyLink from 'components/MyLink/my-link';
import './header.scss';

const Header = () => (
	<div className="header">
		<MyLink to="/">
			<div className="title">Podcaster</div>
		</MyLink>
		<div className="loading">g</div>
	</div>
);

export default Header;
