import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactSearchBox from 'react-search-box'





class SearchModal extends Component {

    constructor(props) {
        super(props);

    }
    data = [
        {
          key: 'john',
          value: 'John Doe',
        },
        {
          key: 'jane',
          value: 'Jane Doe',
        },
        {
          key: 'mary',
          value: 'Mary Phillips',
        },
        {
          key: 'robert',
          value: 'Robert',
        },
        {
          key: 'karius',
          value: 'Karius',
        },
      ]





    render() {


        return(

            <Modal show={this.props.modalShow} className='for-modal'>
                <Modal.Header closeButton onClick={this.props.handleModal}>
                    <Modal.Title className="modal-title">Search Friend</Modal.Title>
                </Modal.Header>

                <ReactSearchBox
                    placeholder="Search Friend"
                    value=""
                    data={this.data}
                    callback={record => console.log(record)}
                />

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleModal}>Cancel</Button>
                    <Button variant="primary" onClick={this.props.handleModal}>Add Friend</Button>
                </Modal.Footer>
            </Modal>

        )
    }



}


export default SearchModal;


