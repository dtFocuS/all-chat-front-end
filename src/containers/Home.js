import React, { Component, Fragment } from 'react';
import '../stylesheets/home.css';
import FriendsList from '../components/FriendsList';
import ChatRoom from '../components/ChatRoom';
import SideNav from '../components/SideNav';
import SearchModal from '../components/SearchModal';



class Home extends Component {


    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            curRoom: null,
        }
    }

    handleModal = () => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow
        }))
        // console.log(this.state.modalShow)
    }

    handleGetRoom = (id) => {
        this.setState(prevState => ({
            curRoom: id
        }))

    }

    showRoom = () => {
        let room = null;
        if (this.state.curRoom) {
            let findRooms = this.props.myRooms.filter(room => room.id === this.state.curRoom);
            console.log(findRooms)
            room = findRooms.map(room => {
                return <ChatRoom key={room.id} room={room} cableApp={this.props.cableApp}/>
            })
        }
        return room;
    }



    render() {
        return(
            <div className='home-container'>
                <SearchModal handleAddFriend={this.props.handleAddFriend} handleModal={this.handleModal} modalShow={this.state.modalShow} otherUsers={this.props.otherUsers}/>
                <SideNav logOut={this.props.logOut} handleModal={this.handleModal}/>
                <FriendsList handleGetRoom={this.handleGetRoom} myRooms={this.props.myRooms} myFriends={this.props.myFriends}/>
                { this.state.curRoom ? this.showRoom() : <h1 className="empty-chat-message">Search or click on friends to start chatting!</h1>}
            </div>
        )
    }



}

export default Home;