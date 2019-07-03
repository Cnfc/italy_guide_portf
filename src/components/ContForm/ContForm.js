import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import App from 'components/App/App';
import Analize from 'components/Analize';



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
          <Link to="/analize">
            <button className="contForm_button"> Начать работу
            </button>
          </Link>
            
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