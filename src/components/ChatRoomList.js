import React, { Component, Fragment } from 'react';
import '../stylesheets/friends.css';
import { Form, Button, ListGroup } from 'react-bootstrap';
import FriendBar from './FriendBar';

class ChatRoomList extends Component {

    constructor() {
        super()
    }

    showFriends = () => {
        let showFriends = null;

        if (this.props.myFriends) {
            showFriends = this.props.myFriends.map(friend => {
                let room1 = this.props.myRooms.filter(room => room.friend_id === friend.id);
                let room2 = this.props.myRooms.filter(room => room.user_id === friend.id);
                return <FriendBar handleGetFriend={this.props.handleGetFriend} key={friend.id} friend={friend} room={ room1.length > 0 ? room1[0] : room2[0]} handleGetRoom={this.props.handleGetRoom}/>
            })
        }

        return showFriends;
    }


    render() {
        
        
        
        return(

            <div className='chat-list-container'>
                <ListGroup>
                    {
                        this.props.myFriends ? this.showFriends() : null
                    }
                </ListGroup>
                
            </div>
        )
    }



}

export default ChatRoomList;