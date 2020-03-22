import React, { Component, Fragment } from 'react';
import '../stylesheets/friends.css';
import { Form, Button, ListGroup } from 'react-bootstrap';
import FriendBar from './FriendBar';

class FriendsList extends Component {

    constructor() {
        super()
    }

    showFriends = () => {
        let showFriends = null;

        if (this.props.myFriends) {
            showFriends = this.props.myFriends.map(friend => {
                return <FriendBar key={friend.id} friend={friend}/>
            })
        }

        return showFriends;
    }


    render() {
        
        
        
        return(

            <div className='friends-container'>
                <ListGroup>
                    {
                        this.props.myFriends ? this.showFriends() : null
                    }
                </ListGroup>
                
            </div>
        )
    }



}

export default FriendsList;