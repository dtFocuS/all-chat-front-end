import React, { Component, Fragment } from 'react';
import { Form, Button, ListGroup, Image, Badge } from 'react-bootstrap';
import profile_pic from '../images/profile_pic.jpg';



class FriendBar extends Component {

    handleClick = () => {
        console.log("click")
        // console.log(this.props.room.id)
        this.props.handleGetRoom(this.props.room.id);
    }

    render() {


        return(

            <div className='friend-bar'>
                <ListGroup.Item variant="warning" onClick={this.handleClick}>
                    <div className="container-image-name">
                        <Image src={this.props.friend.avatar} roundedCircle />
                        <h2>{this.props.friend.username}</h2>

                    </div>
                    
                        
                    
                </ListGroup.Item>
            </div>
        )
    }


}

export default FriendBar;