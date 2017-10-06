import React from 'react';

import Header from 'components/Header/header';
import './header-container.scss';

class HeaderContainer extends React.Component {

  render() {
    return (
        <div className="header-container">
            <Header />
        </div>
    );
  }
}

export default HeaderContainer;
