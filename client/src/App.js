import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Dashboard from './components/Dashboard/Dashboard';

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
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>

    );
  }
}

