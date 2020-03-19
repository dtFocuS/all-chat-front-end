import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../stylesheets/chatroom.css';
import ChatFeed from './ChatFeed';

class ChatRoom extends Component {



    render() {
        return(

            <div className='chat-room'>
                <ChatFeed />
                <Form className='form-group'>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                    <Button variant="primary" type="submit" className='form-button'>
                        Submit
                    </Button>
                    </Form.Group>
                    
                </Form>
                
            </div>

            

        )
    }




}


export default ChatRoom;