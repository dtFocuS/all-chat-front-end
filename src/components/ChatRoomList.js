import React, { Component, Fragment } from 'react';
import '../stylesheets/friends.css';
import { Form, Button, ListGroup } from 'react-bootstrap';
// import FriendBar from './FriendBar';
import ChatRoomBar from './ChatRoomBar';

class ChatRoomList extends Component {

    constructor() {
        super()
    }

    showMyRooms = () => {
        let showMyRooms = null;

        if (this.props.myRooms) {
            showMyRooms = this.props.myRooms.map(room => {
                // let room1 = this.props.myRooms.filter(room => room.friend_id === friend.id);
                // let room2 = this.props.myRooms.filter(room => room.user_id === friend.id);
                return <ChatRoomBar key={room.id} room={room} handleGetRoom={this.props.handleGetRoom}/>
            })
        }

        return showMyRooms;
    }


    render() {
        
        
        
        return(

            <div className='chat-list-container'>
                <ListGroup>
                    {
                        this.props.myRooms ? this.showMyRooms() : null
                    }
                </ListGroup>
                
            </div>
        )
    }



}

export default ChatRoomList;