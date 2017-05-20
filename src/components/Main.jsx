import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Home from './Views/Home';
import Portfolio from './Views/Portfolio';
import Contact from './Views/Contact';
import Layout from './Shared/Layout'

class AppRouter extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Layout}>
          <IndexRoute component={Home}/>
          <Route path="Home" name="Home" component={Home}/>
          <Route path="Portfolio" name="Portfolio" component={Portfolio}/>
          <Route path="Contact" name ="Contact" component={Contact}/>
        </Route>
      </Router>
    );
  }
}

export default AppRouter;
