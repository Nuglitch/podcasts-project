import React from 'react';

import Filter from 'components/Filter/filter';
import './filter-container.scss';

class FilterContainer extends React.Component {

  render() {
    return (
        <div className="filter-container">
			<Filter count={100}/>
        </div>
    );
  }
}

export default FilterContainer;
