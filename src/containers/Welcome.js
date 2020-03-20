import React, { Component, Fragment } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import '../stylesheets/welcome.css';


class Welcome extends Component {

    render() {


        return(
            <div class='welcome-container'>
                <h1>All Chat</h1>
                <Login />
                {/* <Signup /> */}
            </div>

        )
    }


}


export default Welcome;