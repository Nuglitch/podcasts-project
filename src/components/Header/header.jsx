import React from 'react';
import PropTypes from 'prop-types';

import MyLink from 'components/MyLink/my-link';
import './header.scss';

const Header = ({ loading }) => (
	<div className="header">
		<MyLink to="/">
			<div className="title">Podcaster</div>
		</MyLink>
		{loading &&
			<img src={require('images/loading.gif')} className="loading" />
		}
	</div>
);

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
