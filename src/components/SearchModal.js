import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


class SearchModal extends Component {

    constructor(props) {
        super(props);

    }




    render() {


        return(

            <Modal show={this.props.modalShow}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleModal}>Close</Button>
                    <Button variant="primary" onClick={this.props.handleModal}>Save changes</Button>
                </Modal.Footer>
            </Modal>

        )
    }



}


export default SearchModal;



