import React, {Component} from 'react';


import './ContForm.css';

class ContForm extends Component {
  state = {
    me: false
  }

  renderInvitationMessage () {
    if(this.state.me) {
      <p>LLLLL</p>
    } else {
      <p>ssssss</p>
    }
  }

  render() {
    return (
      <div>
        {console.log(this.state)}
        {this.renderInvitationMessage()}
      </div>
    );
  }
}

export default ContForm;