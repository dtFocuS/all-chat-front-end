import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home';
import Welcome from './containers/Welcome';
import FriendsList from './components/FriendsList';
import ChatRoom from './components/ChatRoom';
import 'bootstrap/dist/css/bootstrap.min.css';
import faker from 'faker';

const localHost = "http://localhost:3000/";

const initialState = {
  isLoggedIn: false,
  currentUser: '',
  otherUsers: [],
  notYetFriends: [],
  myFriends: [],
  myRooms: [],
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
      otherUsers: [],
      notYetFriends: [],
      myFriends: [],
      myRooms: [],
      currentRoom: {
        room: {}, 
        users: [],
        messages: []
      }
    }
  }

  componentDidMount()  {
    
    let token = localStorage.getItem('jwt')
    // console.log(token)
    if (token) {
      this.getUser();
      
      // fetch('http://localhost:3000/api/v1/profile', {
      //   headers: {
      //     'Authorization': 'Bearer ' + token
      //   }
      // })
      // .then(response => response.json())
      // .then(json => {
      //   this.setState(prevState => ({
      //     currentUser: json
      //   }), console.log(this.state.isLoggedIn))
      // })
    }
  }

  componentDidUpdate() {
    // console.log(this.state.isLoggedIn)
    // console.log(this.state.currentUser)
    // console.log(localStorage.getItem('jwt'))
    // this.getUser();
  }
 

  loadOtherUsers = () => {
    fetch(localHost + 'api/v1/users')
    .then(resp => resp.json())
    .then(json => {
      const otherUsers = json.filter(user => user.id != this.state.currentUser.id)
      this.setState(prevState => ({
        otherUsers: otherUsers
      }))
    })
  }

  getToken = (jwt) => {
    return localStorage.getItem('jwt')
  }

  saveToken(jwt) {
    console.log("saved")
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
  // componentDidUpdate() {
  //   this.getUser();
  // }
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
        }), (() => {this.loadData()}))
      }
    })
  }

  loadData = () => {
    console.log(this.state.currentUser);
    this.loadOtherUsers();
    this.loadNotYetFriends();
    this.loadMyFriends();
    this.loadMyRooms();
  }

  loadMyRooms = () => {
    
    // console.log(this.state.currentUser.rooms)
    fetch(localHost + 'api/v1/rooms')
    .then(resp => resp.json())
    .then(json => {
      const myRooms = json.filter(room => room.friend_id === this.state.currentUser.id)
      this.setState(prevState => ({
        myRooms: [...prevState.myRooms, ...myRooms, ...this.state.currentUser.rooms]
      }), (() => console.log(this.state.myRooms)))
    })
  }

  loadMyFriends = () => {
    fetch(localHost + 'api/v1/friendships')
    .then(resp => resp.json())
    .then(json => {
      this.setState(prevState => ({
        myFriends: this.state.currentUser.friends
      }))

      // const myFriends = this.state.otherUsers
      // this.setState(prevState => ({

      // }))
    })
  }

  loadNotYetFriends = () => {
    fetch(localHost + 'api/v1/friendships')
    .then(resp => resp.json())
    .then(json => {
      const friends = json.filter(friend => friend.user_id !== this.state.currentUser.id);
      const notYetFriends = friends.filter(friend => friend.friend_id !== this.state.currentUser.id)
      // console.log(notYetFriends)
      // const myFriends = this.state.otherUsers
      // this.setState(prevState => ({

      // }))
    })

  }

 
  logOut = () => {
    this.clearToken();
    this.resetState();
    this.setState({
      currentUser: null
    })
    return <Redirect to='/' />

    
  }
  resetState = () =>{
    this.setState(initialState)
  }

  clearToken(jwt) {
    localStorage.setItem("jwt", "");
  }

  handleAddFriend = (friend) => {
    console.log(friend);

    fetch(localHost + 'api/v1/friendships', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ friendship: { user_id: this.state.currentUser.id, friend_id: friend.id }})
    })
    .then(resp => resp.json())
    .then(json => {
      // const friendship = json[0].friend_id;
      console.log(json[0].friend_id)
      const friend = this.state.otherUsers.filter(user => user.id === json[0].friend_id)

      this.setState(prevState => ({
        myFriends: [...prevState.myFriends, friend[0]],
        notYetFriends: [...prevState.notYetFriends].filter(user => user.id !== json[0].friend_id)
      }), (() => {this.createRoom(this.state.currentUser, friend[0], json[0].id)}))
      
    })
    
  }

  createRoom = (user, friend, friendshipId) => {
    const name = "" + friendshipId + " " + user.id + " " + friend.id;
    fetch(localHost + 'api/v1/rooms', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ room: { name: name, user_id: user.id, friend_id: friend.id}})
    })
    .then(resp => resp.json())
    .then(json => {
      this.setState(prevState => ({
        myRooms: [...prevState.myRooms, json.room]
      }), (() => {console.log(this.state.myRooms)}))
    })
  }

  getRoomData = (id) => {
    fetch(`http://localhost:3000/rooms/${id}`)
    .then(resp => resp.json())
    .then(result => {
      this.setState({
        currentRoom: {
          room: result.data,
          users: result.data.attributes.users,
          messages: result.data.attributes.messages
        }
      })
    })
  }

  updateAppStateRoom = (newRoom) => {
    this.setState({
      currentRoom: {
        room: newRoom.room.data,
        users: newRoom.users,
        messages: newRoom.messages
      }
    })
  }





  render() {
    

   
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route
              exact
              path={"/"}
              render={(props) =>{
                return this.state.isLoggedIn ?
                <Redirect to='/home' />
                :
                <Welcome {...props}
                  handleLogin={this.handleLogin}
                  handleSignUp={this.handleSignUp}
                />
  
              }}
            />
            <Route 
              exact
              path={'/home'}
              render={(props) =>(
                <Home {...props}
                  currentUser={this.state.currentUser}
                  logOut={this.logOut}
                  otherUsers={this.state.otherUsers}
                  handleAddFriend={this.handleAddFriend}
                  myFriends={this.state.myFriends}
                  myRooms={this.state.myRooms}
                  cableApp={this.props.cableApp}
                  updateApp={this.updateAppStateRoom}
                  getRoomData={this.getRoomData}
                  roomData={this.state.currentRoom}
                  currentUser={this.state.currentUser}
                />
              )} 
            />
            {/* <Route exact path='/rooms' render={ (props) => (
              <FriendsList
                allRooms={this.state.allRooms}
                currentUser={this.state.currentUser}
                myFriends={this.state.myFriends}
              />
            )} /> */}
            {/* <Route exact path='/rooms/:id' render={ (props) => {
              return this.state.currentUser ?
              (<ChatRoom
                {...props}
                cableApp={this.props.cableApp}
                getRoomData={this.getRoomData}
                updateApp={this.updateAppStateRoom}
                roomData={this.state.currentRoom}
                currentUser={this.state.currentUser}
              />
              ) : (
                <Redirect to='/' />
              )
            }} /> */}
          </Switch>
        </Router>
      </div>
    );


    

  }
  
}

export default App;
