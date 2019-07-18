import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
// so we want to change all the components to pages like welcome page
import WelcomePage from './page/WelcomePage';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';

export default class App extends Component {
    render() {
      // JSX
      return (
        <Router>
          <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound}/>
          </Switch>
        </Router>
          
      );
    }
}