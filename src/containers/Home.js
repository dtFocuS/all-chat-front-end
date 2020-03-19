import React, { Component, Fragment } from 'react';
import '../stylesheets/home.css';
import FriendsList from '../components/FriendsList';
import ChatRoom from '../components/ChatRoom';
class Home extends Component {






    render() {
        return(
            <div className='home-container'>
                <FriendsList />
                <ChatRoom />
            </div>
        )
    }



}

export default Home;