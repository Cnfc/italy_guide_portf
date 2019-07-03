import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from 'actions';

import Logo from 'components/Header/Logo';
import Nav from 'components/Header/Nav';
import './Header.css'
import logoPerson from 'tools/header_logo.svg';




class Header extends Component {

  renderButton () {
    if(this.props.auth){
      return (
        <React.Fragment>
          <span className="">
          <img className="header_ser-circle header_ser-circle_gray" src={logoPerson} alt="logo Person"/>

          </span>
          <button 
            className='header_button header_button_ex' 
            onClick={() => this.props.isAuth(false)}>
              Выход
          </button>
          
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <input type="text" placeholder="Логин" className='header_login' />
          <input type="pass" placeholder="Пароль" className='header_login'/>
          <button 
            className='header_button' 
            onClick={() => this.props.isAuth(true)}>
              <span className="-Label">ВХОД</span>
          </button>

          <button 
            className='header_button header_button_reg'>
             <span className="header_button  ">РЕГИСТРАЦИЯ</span>
          </button>
        </React.Fragment>
      )
    }
  }

  renderHeader() {
    return (
      this.renderButton()      
    );
  }

  render() {
        
    return (
      <header className="header">
        <Logo />
        <Nav />
        <div className="spacer"></div>
        <React.Fragment>{this.renderHeader()}</React.Fragment>
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


