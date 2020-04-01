import React, { Component } from 'react';
import { Modal, Button, Form, Col } from 'react-bootstrap';
// import ReactSearchBox from 'react-search-box';





class CreateModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
          selectedUser: null,
          chatName: ''
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

    handleSubmit = (event) => {
      event.preventDefault();
      this.props.handleCreateModal();
      this.props.handleCreateRoom(this.state.chatName);
    }

    // handleSelect = (record) => {
    //   this.setState(prevState => ({
    //     selectedUser: record
    //   }))
    // }

    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            chatName: event.target.value
        })
    }


    render() {
        
        // const data = this.props.otherUsers.map( user => {
        //   return {
        //     id: user.id,
        //     key: user.username,
        //     value: user.username
        //   }
        // })
        return(

            <Modal show={this.props.modalShow} className='for-modal'>
                <Modal.Header closeButton onClick={this.props.handleCreateModal}>
                    <Modal.Title className="modal-title">Create Chat Room</Modal.Title>
                </Modal.Header>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Row>
                    {/* <Form.Label column lg={2}>
                        Normal Text
                    </Form.Label> */}
                        <Col>
                            <Form.Control type="text" placeholder="Name" onChange={this.handleChange} value={this.state.chatName} required/>
                        
                        </Col>
                        
                    </Form.Row>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleCreateModal}>Cancel</Button>
                        <Button variant="primary"  type="submit">Create Chat Room</Button>

                    </Modal.Footer>
                    

                </Form>
                

                {/* <ReactSearchBox
                    placeholder="Create Chat Room"
                    value=""
                    data={data}
                    callback={record => console.log(record)}
                    onSelect={this.handleSelect}
                /> */}

                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleCreateModal}>Cancel</Button>
                    <Button variant="primary" onClick={this.handleAdd} type="submit">Create Chat Room</Button>
                </Modal.Footer> */}
            </Modal>

        )
    }



}


export default CreateModal;