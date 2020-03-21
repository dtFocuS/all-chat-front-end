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

    handleSwitch = () => {
        this.setState(prevState => ({
            signUp: !prevState.signUp
        }))

    }

    render() {


        return(
            <div class='welcome-container'>
                <h1 className="header-logo">All Chat</h1>
                {this.state.signUp ? <Signup handleSwitch={this.handleSwitch} handleSignUp={this.props.handleSignUp}/> : <Login handleLogin={this.props.handleLogin} handleSwitch={this.handleSwitch}/>}
                
                {/* <p>Don't have an account yet? <span onClick={this.handleSignUp}>Sign up</span></p> */}
                {/* <Signup /> */}
            </div>

        )
    }


}


export default Welcome;