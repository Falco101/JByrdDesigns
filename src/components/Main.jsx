import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './Views/Home';
import Services from './Views/Services';
import Contact from './Views/Contact';
import Layout from './Shared/Layout'

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="Home" name="Home" component={Home}/>
          <Route path="Services" name="Services" component={Services}/>
          <Route path="Contact" name ="Contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
