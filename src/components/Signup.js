import React, { Component, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import faker from 'faker';


const localHost = "http://localhost:3000/";

class Signup extends Component {


    constructor() {
        super()
        this.username = React.createRef()
        this.password = React.createRef()
        this.state = {
            username: null,
            email: null,
            password: null
        }
    }

    handleChange = event => {
        // console.log(event.target.value)
    }


    handleSubmit = event => {
        event.preventDefault();
        let username = event.target[0].value;
        let email = event.target[1].value;
        let password = event.target[2].value;
        let avatar = faker.internet.avatar();
        
        fetch(localHost + 'api/v1/users', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify( {
            user: {
              username: username,
              email: email,
              password: password,
              avatar: avatar
        
            }
          })
        })
        .then(resp => resp.json())
        .then(json => {
            this.props.handleSignUp({
                username: username,
                password: password
            });
        })
        
    }

    render() {

        return(
            <div className='base-container'>
                <h3>Sign up</h3>
                <Form className='signup-form' onSubmit={this.handleSubmit}>
                    <Form.Group>
                        {/* <Form.Label>Username</Form.Label> */}
                        <Form.Control type="text" placeholder="Username" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail">
                        {/* <Form.Label>Email address</Form.Label> */}
                        <Form.Control type="email" placeholder="Email" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        {/* <Form.Label>Password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange} required/>
                    </Form.Group>
                    <Form.Group>
                        <Button type="submit" variant="secondary" block>Sign up</Button>
                    </Form.Group>
                    <p>Already a member. <span onClick={this.props.handleSwitch}>Log in</span></p>
                </Form>
            </div>


        )



    }

}

export default Signup;