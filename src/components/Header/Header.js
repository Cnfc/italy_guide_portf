import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';


import DropDox from 'components/DropDox/DropDox';

import './Header.css'




class Header extends Component {

  renderButton () {
    if(this.props.auth){
      return (
        <div>
          <img src="components/tools/header_logo"/>
          <button>Выход</button>
          
        </div>
      );
    } else {
      return (
        <div>
          <input>Log in</input>
          <input>Pass</input>
          <button>Sigh In</button>
          <button>Registration</button>
        </div>
      )
    }
  }

  renderHeader() {
    return (
     <ul>
      <li>{this.renderButton()}</li>
    </ul>
    );
  }

  render() {
        
    return (
      <header className="header">
       {this.renderHeader()}


      </header>
    );
  }
}

function mapStateToProps( state ) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps, actions)(Header);


