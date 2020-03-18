import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';

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
