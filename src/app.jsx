import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import HeaderContainer from 'containers/HeaderContainer/header-container';
import Home from 'containers/Home/home';
import 'styles/index.scss';

export default class App extends React.Component {
  render() {
    return (
        <Router>
    		<div>
                <HeaderContainer />
    			<Route exact path="/" component={Home}/>
    		</div>
    	</Router>
    )
  }
}
