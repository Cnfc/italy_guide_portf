import React, {Component} from 'react';


import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'



class App extends Component {

  render() {
    return (
      <div className="_1280x800_">
        <Header />

        <Content />

        <Footer />
      </div>
    );
  }
}

export default App;