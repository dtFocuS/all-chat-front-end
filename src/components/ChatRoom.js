import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/chatroom.css';
import ChatFeed from './ChatFeed';
import RoomWebSocket from './RoomWebSockect';

const localHost = "http://localhost:3000/";

class ChatRoom extends Component {

    constructor() {
        super()
        this.state = {
            newMessage: ""
        }
    }

    handleChange = (event) => {
        
        this.setState({
            newMessage: event.target.value
        })
        console.log(this.state.newMessage)
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // this.setState({
        //     newMessage: ''
        // })
        console.log(this.state.newMessage)

        // const message = {
        //     content: this.state.newMessage,
        //     user_id: this.props.currentUser.id,
        //     room_id: this.props.roomData.room.id
        // }

        fetch(localHost + 'api/v1/messages', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
                // Accept: "application/json"
            },
            body: JSON.stringify({ message: { content: this.state.newMessage, user_id: this.props.currentUser.id, room_id: this.props.roomData.room.id }})
        })
        this.setState({
            newMessage: ""
        })
    }

    

    



    render() {
        return(

            <div className='chat-room'>
                <h1>{this.props.friend ? this.props.friend.name : null}</h1>
                <ChatFeed room={this.props.roomData.room} currentUser={this.props.currentUser} otherUsers={this.props.otherUsers}/>
                <Form className='form-group' onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><span>{this.props.room.name}</span></Form.Label>
                    <Form.Control as="textarea" rows="3" className='chat-input-area' value={this.state.newMessage} onChange={this.handleChange}/>
                    <Button variant="dark" type="submit" className='form-button'>
                        Submit
                    </Button>
                    </Form.Group>
                    
                </Form>

                <RoomWebSocket
                    room={this.props.room}
                    cableApp={this.props.cableApp}
                    updateApp={this.props.updateApp}
                    getRoomData={this.props.getRoomData}
                    roomData={this.props.roomData}
                />
                
            </div>

            

        )
    }




}


export default ChatRoom;