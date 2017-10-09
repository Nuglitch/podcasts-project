import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import HeaderContainer from 'containers/HeaderContainer/header-container';
import Home from 'containers/Home/home';
import PodcastDetail from 'containers/PodcastDetail/podcast-detail';
import 'styles/index.scss';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<HeaderContainer />
					<Route exact path="/" component={Home} />
					<Route exact path="/podcast/:podcastId" component={PodcastDetail} />
				</div>
			</Router>
		);
	}
}
