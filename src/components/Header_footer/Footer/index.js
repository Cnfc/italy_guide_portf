import React, {Component} from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';


class Footer extends Component {

  render() {
    return (
      <footer className='bck_b_dark dark'>
        <div className='container'>
          <div className="logo">
            Houses
          </div>
          <div className='wrapper'>
            <div className='left'>
              <h2>Contact information</h2>
              <div className='business_nfo'>
              {/* ADDRESS */}
                <div className='tag'>
                  <FontAwesomeIcon
                    icon={faCompass}
                    className='icon'
                  />
                  <div className='nfo'>
                    <div>Address</div>
                    <div>Some adress</div>
                  </div>
                </div>

                  {/* Phone*/}
                <div className='tag'>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className='icon'
                  />
                  <div className='nfo'>
                    <div>faPhone</div>
                    <div>4254-564-435</div>
                  </div>
                </div>


                {/* Clock */}
                <div className='tag'>
                  <FontAwesomeIcon
                    icon={faClock}
                    className='icon'
                  />
                  <div className='nfo'>
                    <div>Working house</div>
                    <div>7mon-Sun/ 9am-8pm</div>
                  </div>
                </div>

                {/* EMAIL */}
                <div className='tag'>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className='icon'
                  />
                  <div className='nfo'>
                    <div>Email</div>
                    <div>some@mail.com</div>
                  </div>
                </div>
                {/* Some adding zone*/}
                <div className='tag'>
                  <FontAwesomeIcon
                    className='icon'
                  />
                  <div className='nfo'>
                    <div>faZone</div>
                    <div>Some</div>
                  </div>
                </div>

              </div>
            </div>
            <div className='left'>
              <h2>Be first to know</h2>
              <div>
                Get all the latest iformation to some@mail.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;