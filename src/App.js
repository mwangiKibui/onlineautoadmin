import React, { Component } from 'react';

//third-party

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//components
import Layout from './containers/TheLayout';
import Login from './views/login';
import Logout from './views/logout';
import Register from './views/signup';

//styles
import './scss/style.scss';


class App extends Component {

  render() {
    return (
      <Router>
            <Switch>
              <Route exact path="/auth/login" name="Login" component={Login} />
              <Route exact path="/auth/signup" name="Register" component={Register}/>
              <Route exact path="/auth/logout" name="Logout" component={Logout} />
              <Route path="/" name="Home" component={Layout} />
            </Switch>
      </Router>
    );
  }
}

export default App;
