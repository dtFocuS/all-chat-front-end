import React, { Component, Fragment } from 'react';
import { Form, Button, ListGroup, Image, Badge } from 'react-bootstrap';
import profile_pic from '../images/profile_pic.jpg';


class FriendBar extends Component {

    handleClick = () => {
        console.log("click")
    }

    render() {


        return(

            <div className='friend-bar'>
                <ListGroup.Item variant="warning" onClick={this.handleClick}>
                    <div className="container-image-name">
                        <Image src={profile_pic} roundedCircle />
                        <h2>Danny Tseng</h2>

                    </div>
                    
                        
                    
                </ListGroup.Item>
            </div>
        )
    }


}

export default FriendBar;