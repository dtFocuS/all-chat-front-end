import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';


class Signup extends Component {

    render() {

        return(
            <div className='base-container'>
                <h3>Sign up</h3>
                <Form className='signup-form'>
                    <Form.Group>
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control type="text" placeholder="Username" />
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="secondary" block>Sign up</Button>
                    </Form.Group>
                    <p>Back to <span onClick={this.props.handleSignUp}>Log in</span></p>
                </Form>
            </div>


        )



    }

}

export default Signup;