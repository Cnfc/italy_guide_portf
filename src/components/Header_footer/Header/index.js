import React, { Component } from 'react';
import { Link } from 'react-router-dom';


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
        {this.showlinks(this.state.page)}
      </div>
    );
  }
}

export default Header;