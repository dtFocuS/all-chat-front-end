import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Welcome from './containers/Welcome';
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
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) =>(
                <Welcome {...props}/>

              )}
            />
            <Route 
              exact
              path={'/home'}
              render={(props) =>(
                <Home {...props}/>
              )}
            
            
            />
          </Switch>
        </Router>
        

      </div>
    );

  }
  
}

export default App;
