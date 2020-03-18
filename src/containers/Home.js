import React, { Component, Fragment } from 'react';
import '../stylesheets/home.css';
import FriendsList from '../components/FriendsList';

class Home extends Component {






    render() {
        return(
            <div className='home-container'>
                <FriendsList />

            </div>
        )
    }



}

export default Home;