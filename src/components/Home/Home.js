import React, {Component} from 'react';
import './Home.css';
import HeroContent from './Hero-content';
import NewsFeed from './NewsFeed';

class Home extends Component {

  render() {
    return (
      
    <div className="page_container">
      <HeroContent />
      <NewsFeed />
      
    </div>
    );
  }
}

export default Home;