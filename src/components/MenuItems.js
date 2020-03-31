import React, { Component, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form, Button, ListGroup, Image, Badge, Figure } from 'react-bootstrap';
import ProfilePic from './ProfilePic';




class MenuItems extends Component {

    // state = {
    //     navigate: false
    // }

    handleOpenAndClose = () => {
        this.props.handleOpen();
        this.props.handleModal();
    }

    handleCreateModalOpenOrClose = () => {
        this.props.handleOpen();
        this.props.handleCreateModal();

    }

    // logOut = () => {
    //     if (this.props.logOut()) {
    //         this.setState(prevState =>({
    //             navigate: true
    //         }))
    //     }
    // }

    render() {
        // const { navigate } = this.state;
        // if (navigate) {
        //     return <Redirect to='/' push={true}/>
        // }
        return(
            <React.Fragment>
                <ProfilePic currentUser={this.props.currentUser}/>
                <a href="#" onClick={this.handleCreateModalOpenOrClose}>
                    Create Channel
                </a>
                <a href="#" onClick={this.handleOpenAndClose}>
                    Search Channel
                </a>
                
                <Link to='/'><a href='#' onClick={this.props.logOut} >Logout</a></Link>

               
                
                {/* <a href="#" onClick={this.logOut}>
                    Log Out
                </a> */}
    
            </React.Fragment>
    
    
        )

    }
    

}


export default MenuItems;