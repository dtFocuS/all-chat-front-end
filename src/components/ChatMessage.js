import React, { Component } from 'react';
import { Form, Button, Image } from 'react-bootstrap';

const localHost = "http://localHost:3000/";
const URL = "https://all-chat-backend.herokuapp.com/";

class ChatMessage extends Component {
    
    whichUser = () => {
        if (this.props.message.user_id === parseInt(this.props.currentUser.id)) {
            return 'current-user-message'
        } else {
            return 'other-user-message'
        }
    }
    
    render() {
        
        // when rendering the chat message, I need to first check whether the author of that message is my current user or not (by comparing ids)
        // if it is my current user, I will align the chat message div to the right of the page, and use a different color to differentiate their messages from the others' messages
        return (
            <div id="chat-message" className={this.whichUser()}>
                <h4>{this.props.message.content}</h4>
                <Image src={this.props.otherUser.length > 0 ? this.props.otherUser[0].avatar : this.props.currentUser.avatar} alt="message author's avatar" roundedCircle/><span>@{this.props.otherUser.length > 0 ? this.props.otherUser[0].username : this.props.currentUser.username}</span>
            </div>     
        )
    }
}

export default ChatMessage