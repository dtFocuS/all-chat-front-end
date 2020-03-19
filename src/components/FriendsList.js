import React, { Component, Fragment } from 'react';
import '../stylesheets/friends.css';
import { Form, Button, ListGroup } from 'react-bootstrap';
import FriendBar from './FriendBar';

class FriendsList extends Component {

    constructor() {
        super()
    }



    render() {
        return(

            <div className='friends-container'>
                <ListGroup>
                    <FriendBar />
                </ListGroup>
                
            </div>
        )
    }



}

export default FriendsList;