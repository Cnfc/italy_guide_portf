import React, {Component} from 'react';

import Left_Menu from 'components/Content/Left_Menu';
import Main from 'components/Content/Main';
import RightDevBlock from 'components/Content/RightDevBlock/RightDevBlock';

import './Content.css';

class Content extends Component {

  render() {
    return (
      <div className="container">

        <Left_Menu />

        <Main></Main>

        <RightDevBlock></RightDevBlock>

      </div>
    );
  }
}

export default Content;