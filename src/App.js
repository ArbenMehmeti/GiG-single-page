import React, {Component} from 'react';
import './App.css';
import {withRouter} from 'react-router';
import Home from './components/home/index';
// route
import {Redirect, Route, Router, Switch} from "react-router-dom";
import history from "./utils/history";

class App extends Component {
  render() {
      return (
        <Router history={history}>
          <Route
            render={() => (
                <Switch>
                  <Route exact component={Home} path="/" />
                  <Redirect to="/" />
                </Switch>
                )}
          />
			  </Router>
      )
  }
}

export default withRouter(App);
