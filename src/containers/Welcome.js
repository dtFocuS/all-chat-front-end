import React, { Component, Fragment } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import '../stylesheets/welcome.css';


class Welcome extends Component {

    constructor(props) {
        super(props);
        
    }

    render() {


        return(
            <div class='welcome-container'>
                <h1 className="header-logo">All Chat</h1>
                <Login />
                {/* <Signup /> */}
            </div>

        )
    }


}


export default Welcome;