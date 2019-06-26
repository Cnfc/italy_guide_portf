import React, { Component } from 'react';

import './Header.css'

import Main from './Main/';
import SideDrawer from './SideDrawer';
import BackDrop from './BackDrop';



class Header extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };


  render() {
    let sideDrawer;
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop = <BackDrop clickToClose={this.backdropClickHandler}/>;
    }

    return (
      <React.Fragment>
        <Main drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen} />
        {backDrop}
        
      </React.Fragment>
    );
  }
}

export default Header;


