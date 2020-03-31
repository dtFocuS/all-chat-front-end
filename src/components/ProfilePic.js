import React, { Component } from 'react';

import { Form, Button, ListGroup, Image, Badge, Figure } from 'react-bootstrap';


class ProfilePic extends Component {

    render() {
        return(
            <div className="profile-pic">
                <Image src={this.props.currentUser.avatar} roundedCircle/>
                <p>@{this.props.currentUser.username}</p>
            </div>
            
        )
    }



}

export default ProfilePic;