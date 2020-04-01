import React, { Component, Fragment } from 'react';
import '../stylesheets/home.css';
import FriendsList from '../components/FriendsList';
import ChatRoom from '../components/ChatRoom';
import SideNav from '../components/SideNav';
import SearchModal from '../components/SearchModal';
import CreateModal from '../components/CreateModal';
import ChatRoomList from '../components/ChatRoomList';



class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            createShow: false,
            curRoom: null,
            friend: null,
        }
    }

    handleModal = () => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow
        }))
        // console.log(this.state.modalShow)
    }

    handleCreateModal = () => {
        console.log("ok")
        this.setState(prevState => ({
            createShow: !prevState.createShow
        }))
    }

    handleGetRoom = (id) => {
        this.setState(prevState => ({
            curRoom: id
        }), () => {console.log(id)})
    }

    handleGetFriend = (friend) => {
        this.setState(prevState => ({
            friend: friend,
        }))
    }

    showRoom = () => {
        let room = null;
        if (this.state.curRoom) {
            let findRooms = this.props.myRooms.filter(room => room.id === this.state.curRoom);
            console.log(findRooms)
            room = findRooms.map(room => {
                return <ChatRoom otherUsers={this.props.otherUsers} currentUser={this.props.currentUser} key={room.id} room={room} cableApp={this.props.cableApp} updateApp={this.props.updateApp} getRoomData={this.props.getRoomData} roomData={this.props.roomData}/>
            })
        }
        return room;
    }



    render() {
        return(
            <div className='home-container'>
                <SearchModal handleJoinRoom={this.props.handleJoinRoom} handleModal={this.handleModal} modalShow={this.state.modalShow} otherRooms={this.props.otherRooms}/>
                <CreateModal handleCreateModal={this.handleCreateModal} modalShow={this.state.createShow} handleCreateRoom={this.props.handleCreateRoom}/>
                <SideNav currentUser={this.props.currentUser} logOut={this.props.logOut} handleModal={this.handleModal} handleCreateModal={this.handleCreateModal}/>
                <ChatRoomList myRooms={this.props.myRooms} handleGetRoom={this.handleGetRoom} selectedRoomId={this.state.curRoom}/>
                {/* <FriendsList handleGetFriend={this.handleGetFriend} handleGetRoom={this.handleGetRoom} myRooms={this.props.myRooms} myFriends={this.props.myFriends}/> */}
                { this.state.curRoom ? this.showRoom() : <h1 className="empty-chat-message">Search or create chat room to start chatting!</h1>}
            </div>
        )
    }



}

export default Home;