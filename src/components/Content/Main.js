import React, {Component} from 'react';

class Main extends Component {

  render() {
    return (
      <div className="main">
        <h1 className='main_header'>Анализ флюораграмм</h1>
        <div className='main_desc' >
          <p >
            Наш сервис поможет вам проанализировать цифровые флюорографические снимки. Флюорограммы анализируются на наличие всех возможных патологий, которые можно выявить при флюорографии
          </p>
          
        </div>
      </div>
    );
  }
}

export default Main;