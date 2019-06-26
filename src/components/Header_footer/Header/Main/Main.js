import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';


class Header extends Component {

  state = {
    page: [
      {
        name: 'Home',
        linkTo: '/',
        public: true
      },
      {
        name: 'About',
        linkTo: '/about',
        public: true
      },
      {
        name: 'Tour',
        linkTo: '/tour',
        public: true
      },
      {
        name: 'Gallery',
        linkTo: '/gallery',
        public: true
      },
      {
        name: 'Contact Form',
        linkTo: '/contact',
        public: true
      },
      
    ]
  }

  defaultLinks = (item ,i) => (
    <Link to={item.linkTo} key={i}>
      {item.name}
    </Link>
  )

  showlinks = (type) => {
    let list = [];

    type.forEach((item) => {
      if(item.public === true){
        list.push(item)
      }
    } )
    

    return list.map((item ,i) => {
      return this.defaultLinks(item, i);
    })
  }
  

  render() {
    return (
      <div>
      
      <header className="header">
        <nav className="header_navigation">
        
        <div className="header__logo">The Logo</div>
        <div className='header_spacer'></div>

        <div className="header_navigation-items">
          {this.showlinks(this.state.page)}
        </div>
        <div className="header_toggle-button-close">
          <DrawerToggleButton click={this.props.drawerClickHandler} />
          
        </div>

        </nav>
      </header>
      </div>
    );
  }
}

export default Header;
