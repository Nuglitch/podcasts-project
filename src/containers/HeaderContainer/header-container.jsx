import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from 'components/Header/header';
import './header-container.scss';

class HeaderContainer extends React.Component {
	render() {
		return (
			<div className="header-container">
				<Header loading={this.props.loading}/>
			</div>
		);
	}
}

HeaderContainer.propTypes = {
	loading: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
	return {
		loading: state.appReducer.loading
	};
};

export default connect(mapStateToProps)(HeaderContainer);
