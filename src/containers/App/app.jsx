import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderContainer from 'containers/HeaderContainer/header-container';
import Home from 'containers/Home/home';
import PodcastDetail from 'containers/PodcastDetail/podcast-detail';
import { fetchPodcastsList } from 'actions/podcasts-list.actions';
import 'styles/core.scss';

class App extends React.Component {
	componentWillMount() {
		this.props.fetchPodcastsList();
	}

	render() {
		return (
			<Router>
				<div>
					<HeaderContainer />
					<Route exact path="/" component={Home} />
					<Route path="/podcast/:podcastId" component={PodcastDetail} />
				</div>
			</Router>
		);
	}
}

App.propTypes = {
	fetchPodcastsList: PropTypes.func.isRequired
};

export default  connect(null, { fetchPodcastsList })(App);
