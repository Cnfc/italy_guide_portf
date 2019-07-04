import React, {Component} from 'react';
import { connect } from 'react-redux';

import requireAuth from 'components/requireAuth'; 
import AnalizHeader from './AnalizHeader';
import MainZone from './MainZone';

class Analize extends Component {

  render() {
    return (
      <div>
        <AnalizHeader />
        <MainZone />
      </div>
    );
  }
}

export default Analize;