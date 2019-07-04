import React, {Component} from 'react';
import { connect } from 'react-redux';

import requireAuth from 'components/requireAuth'; 
import AnalizHeader from './AnalizHeader';
import MainZone from './MainZone';

class Analize extends Component {

  render() {
    return (
      <React.Fragment>
        <AnalizHeader />
        <MainZone />
      </React.Fragment>
    );
  }
}

export default Analize;