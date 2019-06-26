import React, {Component} from 'react';

import Header from '../components/Header_footer/Header';
import Footer from '../components/Header_footer/Footer';
import SideDrawer from '../components/Header_footer/Header/SideDrawer';
import BackDrop from '../components/Header_footer/Header/BackDrop';

class Layout extends Component {

  render() {
    return (
      <div>
          <Header />
          <SideDrawer />
          <BackDrop />
        <div className='container'>
          {this.props.children}
        </div>
          <Footer />
      </div>
    );
  }
}

export default Layout;