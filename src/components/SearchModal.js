import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactSearchBox from 'react-search-box'





class SearchModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedUser: null,
        }

    }
    // data = [
    //     {
    //       key: 'john',
    //       value: 'John Doe',
    //     },
    //     {
    //       key: 'jane',
    //       value: 'Jane Doe',
    //     },
    //     {
    //       key: 'mary',
    //       value: 'Mary Phillips',
    //     },
    //     {
    //       key: 'robert',
    //       value: 'Robert',
    //     },
    //     {
    //       key: 'karius',
    //       value: 'Karius',
    //     },
    //   ]
    componentDidUpdate() {
      // console.log(this.props.otherUsers)

    }

    // data = this.props.otherUsers

    handleAdd = () => {
      
      this.props.handleModal();
      this.props.handleAddFriend(this.state.selectedUser);
    }

    handleSelect = (record) => {
      this.setState(prevState => ({
        selectedUser: record
      }))
    }


    render() {
        
        const data = this.props.otherUsers.map( user => {
          return {
            id: user.id,
            key: user.username,
            value: user.username
          }
        })
        return(

            <Modal show={this.props.modalShow} className='for-modal'>
                <Modal.Header closeButton onClick={this.props.handleModal}>
                    <Modal.Title className="modal-title">Search Friend</Modal.Title>
                </Modal.Header>

                <ReactSearchBox
                    placeholder="Search Friend"
                    value=""
                    data={data}
                    callback={record => console.log(record)}
                    onSelect={this.handleSelect}
                />

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleModal}>Cancel</Button>
                    <Button variant="primary" onClick={this.handleAdd}>Add Friend</Button>
                </Modal.Footer>
            </Modal>

        )
    }



}


export default SearchModal;


