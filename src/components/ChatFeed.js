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
            // const avatar = this.whichAvatar(message)
            return <ChatMessage key={message.id} message={message} currentUser={this.props.currentUser}/>
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
                        <h3>This room has no messages yet - be the first to post!</h3>
                    ) }
                </div>


            </div>

        )
    }



}


export default ChatFeed;