import React, { Component, Fragment } from 'react';



class MenuItems extends Component {



    handleOpenAndClose = () => {
        this.props.handleOpen();
        this.props.handleModal();
    }

    render() {
        return(
            <React.Fragment>
                <a href="#" onClick={this.handleOpenAndClose}>
                    Add Friend
                </a>
                <a href="#" onClick={this.handleOpenAndClose}>
                    Log Out
                </a>
    
            </React.Fragment>
    
    
        )

    }
    

}


export default MenuItems;