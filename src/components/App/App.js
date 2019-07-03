import React, {Component} from 'react';


import Header from 'components/Header'
import Content from 'components/Content'
import Footer from 'components/Footer'
import ContForm from 'components/ContForm';



class App extends Component {

  render() {
    return (
      <div className="_1280x800_">
        <Content />
        <ContForm />
      </div>
    );
  }
}

export default App;