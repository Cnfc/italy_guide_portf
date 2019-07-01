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
        <div>
          <img className="user-circle" src={logoPerson} alt="logo Person"/>
          <button 
            className='MCB-3' 
            onClick={() => this.props.isAuth(false)}>
              Выход
          </button>
          
        </div>
      );
    } else {
      return (
        <div>
          <input type="text" placeholder="Логин" className='GS-3' />
          <input type="pass" placeholder="Пароль" className='GS-3'/>
          <button 
            className='MCB-3' 
            onClick={() => this.props.isAuth(true)}>
              <span className="-Label">ВХОД</span>
          </button>

          <button 
            className='Blue-3 Rectangle-R4'>
             <span className="-Label_res">РЕГИСТРАЦИЯ</span>
          </button>
        </div>
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
        <span>{this.renderHeader()}</span>
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


