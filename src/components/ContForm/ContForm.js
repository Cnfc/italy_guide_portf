import React, {Component} from 'react';
import { connect } from 'react-redux';


import './ContForm.css';

class ContForm extends Component {
  state = {
    me: false
  }

  renderInvitationMessage () {
    if(!this.props.auth) {
      return (
        <div className="contForm">
          <p className="contForm_Parag">
          Если вы хотите воспользоваться приложением, вам нужно войти или зарегистрироваться
          </p>
        </div>
      ) 
      } else {
        return (
          <div className="contForm">
            <button className="contForm_button"><p>Начать работу</p></button> 
          </div>
        )
    }
  }

  render() {
    return (
      <div>
        {this.renderInvitationMessage()}
      </div>
    );
  }
}


function mapStateToProps( state ) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(ContForm);