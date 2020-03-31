import React, { Component, Fragment } from 'react';
import { Form, Button, ListGroup, Image, Badge } from 'react-bootstrap';
import profile_pic from '../images/profile_pic.jpg';



class ChatRoomBar extends Component {

    handleClick = () => {
        console.log("click")
        // console.log(this.props.room.id)
        this.props.handleGetRoom(this.props.room.id);
        // this.props.handleGetFriend(this.props.friend);
    }

    render() {


        return(

            <div className='chat-room-bar'>
                <ListGroup.Item variant="warning" onClick={this.handleClick}>
                    <div className="container-image-name">
                        {/* <Image src={this.props.friend.avatar} roundedCircle /> */}
                        <h2># {this.props.room.name}</h2>

                    </div>
                    
                        
                    
                </ListGroup.Item>
            </div>
        )
    }


}

export default ChatRoomBar;