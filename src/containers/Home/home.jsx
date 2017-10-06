import React from 'react';

import FilterContainer from 'containers/FilterContainer/filter-container';
import PodcastsListContainer from 'containers/PodcastsListContainer/podcasts-list-container';

class Home extends React.Component {

  render() {
    return (
        <div className="main-page-container">
            <FilterContainer />
			<PodcastsListContainer />
        </div>
    );
  }
}

export default Home;
