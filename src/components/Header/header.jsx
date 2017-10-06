import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

const Header = () => (
	<div className="header">
		<Link  to="/">
			<div className="title">Podcaster</div>
		</Link>
		<div className="loading">g</div>
	</div>
);

export default Header;
