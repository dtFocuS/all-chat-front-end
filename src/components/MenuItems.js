import React, {Fragment} from 'react';



function MenuItems(props) {


    return(
        <React.Fragment>
            <a href="#" onClick={props.handleOpen}>
                Add Friend
            </a>
            <a href="#" onClick={props.handleOpen}>
                Log Out
            </a>

        </React.Fragment>


    )

}


export default MenuItems;