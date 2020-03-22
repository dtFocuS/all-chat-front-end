import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/chatroom.css';
import ChatFeed from './ChatFeed';

class ChatRoom extends Component {

    constructor() {
        super()
        this.state = {
            messsage: ""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target[0].value)
    }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState = (prevState => ({
            message: event.target.value
        }))
    }



    render() {
        return(

            <div className='chat-room'>
                <ChatFeed />
                <Form className='form-group' onSubmit={this.handleSubmit}>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{this.props.room.name}</Form.Label>
                    <Form.Control as="textarea" rows="3" className='chat-input-area' value={this.state.message} onChange={this.handleChange}/>
                    <Button variant="dark" type="submit" className='form-button'>
                        Submit
                    </Button>
                    </Form.Group>
                    
                </Form>
                
            </div>

            

        )
    }




}


export default ChatRoom;