import React, { Component, Fragment } from 'react';
import { Redirect, Link } from 'react-router-dom';



class MenuItems extends Component {

    // state = {
    //     navigate: false
    // }

    handleOpenAndClose = () => {
        this.props.handleOpen();
        this.props.handleModal();
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
                <a href="#" onClick={this.handleOpenAndClose}>
                    Add Friend
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