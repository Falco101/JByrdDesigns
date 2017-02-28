require('normalize.css/normalize.css');
require('styles/App.scss');

import React from 'react';

//import Contact from './Contact';
import Home from './Home';
// import Portfolio from './Portfolio';


let logoImg = require('../images/logo.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <img src={logoImg} alt="JByrd Designs" className='site-logo'/>
        <nav>
          <ul>
            <li><a href='#' >Home</a></li>
            <li><a href='#' >Portfolio</a></li>
            <li><a href='#' >Contact</a></li>
          </ul>
        </nav>
        <div className="content-container">
          <Home />
        </div>
        <footer>
          <p>&copy; Jonathan Byrd 2017</p>
        </footer>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
