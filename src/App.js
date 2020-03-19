import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      auth: {
        isLoggedIn: false,
        currentUser: ''
      },
      currentRoom: {
        room: {}, 
        users: [],
        messages: []
      }
    }
  }


  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );

  }
  
}

export default App;
