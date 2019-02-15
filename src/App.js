import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { hot } from 'react-hot-loader'

import Header from "./components/header.js"
import Register from "./containers/register.js"

import './stylesheets/main.scss'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Header />

          <div className="main">
            <Route exact path="/" />
            <Route path="/register" component={Register} />
          </div>
        </div>
    </Router>
    );
  }
}

export default hot(module)(App)
