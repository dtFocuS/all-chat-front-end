import React, { Component, Fragment } from 'react';
import ChatMessage from './ChatMessage';


class ChatFeed extends Component {

    componentDidUpdate() {
        let messageDiv = document.getElementById('messages')
        // messageDiv.scrollToBottom = messageDiv.scrollHeight
        messageDiv.scrollTop = messageDiv.scrollHeight - messageDiv.clientHeight;
    }

    displayMessages = (messages) => {
        return messages.map(message => {
            const otherUser = this.props.otherUsers.filter(otherUser => otherUser.id === message.user_id)
            // const curUser = this.props.
            return <ChatMessage key={message.id} message={message} currentUser={this.props.currentUser} otherUser={otherUser}/>
        }) 
    }

    // whichAvatar = (message) => {
    //     const user = this.props.room.attributes.users.data.find(user => parseInt(user.id) === message.user_id )
    //     return user.attributes.avatar_url
    // }


    render() {

        return(

            <div className='chat-feed'>
                <div id='messages' className='chat-display'>
                    { this.props.room.messages ? (
                        this.displayMessages(this.props.room.messages)
                    ) : (
                        <h4>This room has no messages yet - be the first to post!</h4>
                    ) }
                </div>


            </div>

        )
    }



}


export default ChatFeed;