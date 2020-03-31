import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import ReactSearchBox from 'react-search-box'





class SearchModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedRoom: null,
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

    handleJoin = () => {
      
      this.props.handleModal();
      this.props.handleJoinRoom(this.state.selectedRoom.id);
    }

    handleSelect = (record) => {
      this.setState(prevState => ({
        selectedRoom: record
      }))
    }


    render() {
        
        const data = this.props.otherRooms.map( room => {
          return {
            id: room.id,
            key: room.name,
            value: room.name
          }
        })
        return(

            <Modal show={this.props.modalShow} className='for-modal'>
                <Modal.Header closeButton onClick={this.props.handleModal}>
                    <Modal.Title className="modal-title">Search For Chat Room</Modal.Title>
                </Modal.Header>

                <ReactSearchBox
                    placeholder="Search For Chat Room"
                    value=""
                    data={data}
                    callback={record => console.log(record)}
                    onSelect={this.handleSelect}
                />

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleModal}>Cancel</Button>
                    <Button variant="primary" onClick={this.handleJoin}>Join Chat Room</Button>
                </Modal.Footer>
            </Modal>

        )
    }



}


export default SearchModal;


