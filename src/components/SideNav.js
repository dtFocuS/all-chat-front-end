import React, { Component, Fragment } from 'react';



class SideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            closed: true,
        }
    }

    handleOpen = () => {
        this.setState(prevState => ({
            closed: !prevState.closed
        }))
    }

    render() {
        const closeMenu = { width: '25px' };
        const openMenu = { width: '250px'}
        return(
            <div className='side-nav' style={this.state.closed ? closeMenu : openMenu}>
                <span className='slide'>
                    <a href='#' onClick={this.handleOpen}>
                        {this.state.closed ? <i class="fas fa-chevron-right"></i> : <i class="fas fa-chevron-left"></i>}
                    </a>
                </span>


            </div>
        )
    }




}

export default SideNav;