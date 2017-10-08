import React from 'react';
import { Link } from 'react-router-dom';

import './my-link.scss';

const MyLink = props => {
	return <Link {...props} className="my-link" />;
};

export default MyLink;
