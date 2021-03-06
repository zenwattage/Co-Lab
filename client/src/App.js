import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ProfilePage from './page/ProfilePage';
import Login from './page/Login';
import Signup from './page/Signup';
// so we want to change all the components to pages like welcome page
import WelcomePage from './page/WelcomePage';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';
import PortfolioPage from './page/PortfolioPage';

// MONGO_DB IMPORTS

const mongoose = require('mongoose');
const logger = require('morgan');
const axios = require('axios')
const path = require('path');
// Portage
const PORT = process.env.PORT || 3001;

// DOTENV - Obsfucates sensitive information
require('dotenv').config()



// END MONGO_DB IMPORTS

export default class App extends Component {

    render() {
      // JSX
      return (
        <Router>
          <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>

    );
  }
}

