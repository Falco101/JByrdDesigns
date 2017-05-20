require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';
import {Link} from 'react-router'

let logoImg = require('../../images/logo.svg');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={logoImg} alt="JByrd Designs" className='site-logo'/>
        <nav>
          <ul>
            <li>
              <Link to='Home' activeClassName='jbd-nav-button-active' className='jbd-nav-button'>Home</Link>
            </li>
            <li>
              <Link to='Portfolio' activeClassName='jbd-nav-button-active' className='jbd-nav-button'>Portfolio</Link>
            </li>
            <li>
              <Link to='Contact' activeClassName='jbd-nav-button-active' className='jbd-nav-button'>Contact</Link>
            </li>
          </ul>
        </nav>
        <div className="content-container">
          {this.props.children}
          <footer>
            <p>&copy; Jonathan Byrd 2017</p>
          </footer>
        </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
