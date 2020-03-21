import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';


class Login extends Component {





    handleSubmit = event => {
        event.preventDefault();
        this.props.handleLogin(event)
    }
    

    render() {

        return(
            <div className='base-container'>
                <h3>Log in</h3>
                <Form className='login-form' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    {/* <Form.Group controlId="formGroupEmail"> */}
                        {/* <Form.Label>Email address</Form.Label> */}
                        {/* <Form.Control type="email" placeholder="Email" /> */}
                    {/* </Form.Group> */}
                    <Form.Group controlId="formGroupPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="secondary" block>Log in</Button>

                    </Form.Group>
                    
                </Form>
                <p>Don't have an account yet? <span onClick={this.props.handleSwitch}>Sign up</span></p>
            </div>


        )



    }



}

export default Login;