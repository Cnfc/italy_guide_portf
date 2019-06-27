import React, {Component} from 'react';

import './HeroContent.css';

class HeroContent extends Component {

  render() {
    return (
      <div className='welcome-content'>
        <div className="welcome-copy">
          <h1 className="welcome-title">Welcome Message</h1>
          <p className="welcome-text">Atque sint aliquam numquam quam voluptate </p>
          <p className="welcome-text"> doloremque labore accusantium, iste excepturi</p>
          <button className="welcome-button">Call me</button>
        </div>
      </div>
    );
  }
}

export default HeroContent;