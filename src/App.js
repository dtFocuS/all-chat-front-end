import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Welcome from './containers/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import faker from 'faker';

const localHost = "http://localhost:3000/";

const initialState = {
  isLoggedIn: false,
  currentUser: '',
  currentRoom: {
    room: {}, 
    users: [],
    messages: []
  }
}

class App extends Component {
  constructor() {
    super()
    
    this.state = {
      isLoggedIn: false,
      currentUser: '',
      currentRoom: {
        room: {}, 
        users: [],
        messages: []
      }
    }
  }

  getToken = (jwt) => {
    return localStorage.getItem('jwt')
  }

  saveToken(jwt) {
    localStorage.setItem('jwt', jwt)
  }

  handleLogin = event => {
    // event.preventDefault();
    let username = event.target[0].value;
    let password = event.target[1].value;

    this.logInUser(username, password);
    
  }

  handleSignUp = (user) => {
    this.logInUser(user.username, user.password)

  }

  logInUser = (username, password) => {
    // let username = this.state.username;
    // let password = this.state.password;
    console.log(username);
    console.log(password);
    fetch(localHost + 'api/v1/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: { username, password } })
    })
    .then(res => res.json())
    .then(json => {
      if (json && json.jwt) {
        this.saveToken(json.jwt)
        this.getUser();
        // this.setState(prevState => ({
        //   isLoggedIn: true
        // }), this.getUser())
      }
    })

  }

  getUser = () => {
    let token = this.getToken()
    fetch(localHost + 'api/v1/profile', {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
    .then(res => res.json())
    .then(json => {
      if (json.user) {
        this.setState(prevState => ({
          currentUser: json.user,
          isLoggedIn: true
        }))
      }
    })
  }

 
  logOut = () => {
    this.clearToken();
    this.resetState();
    // this.setState(prevState => ({ 
    //   isLoggedIn: false,
    //   currentUser: null
    // }), this.props.history.push('/'));
    return true;
    
  }
  resetState = () =>{
    this.setState(initialState)
  }

  clearToken(jwt) {
    localStorage.setItem("jwt", "");
  }


  render() {

    if (this.state.isLoggedIn === true) {
      return <Redirect to='/home' push={true}/>
    } else {
      return (
        <div className="App">
          <Router>
            <Switch>
              <Route
                exact
                path={"/"}
                render={(props) =>(
                  <Welcome {...props}
                    handleLogin={this.handleLogin}
                    handleSignUp={this.handleSignUp}
                  
                  />
  
                )}
              />
              <Route 
                exact
                path={'/home'}
                render={(props) =>(
                  <Home {...props}
                    currentUser={this.state.currentUser}
                    logOut={this.logOut}
                  />
                )}
              
              
              />
            </Switch>
          </Router>
          
  
        </div>
      );

    }
    

  }
  
}

export default App;
