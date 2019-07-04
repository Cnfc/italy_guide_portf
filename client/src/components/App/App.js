import React, {Component} from 'react';
import { connect } from 'react-redux';


import Content from 'components/Content'
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
