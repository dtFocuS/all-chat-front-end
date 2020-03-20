import React, { Component, Fragment } from 'react';
import Login from '../components/Login';
import Signup from '../components/Signup';
import '../stylesheets/welcome.css';


class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            signUp: false,
        }
        
    }

    handleSignUp = () => {
        this.setState(prevState => ({
            signUp: !prevState.signUp
        }))

    }

    render() {


        return(
            <div class='welcome-container'>
                <h1 className="header-logo">All Chat</h1>
                {this.state.signUp ? <Signup handleSignUp={this.handleSignUp}/> : <Login handleSignUp={this.handleSignUp}/>}
                
                {/* <p>Don't have an account yet? <span onClick={this.handleSignUp}>Sign up</span></p> */}
                {/* <Signup /> */}
            </div>

        )
    }


}


export default Welcome;