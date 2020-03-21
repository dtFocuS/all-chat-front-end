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
        }
    }

    handleModal = () => {
        this.setState(prevState => ({
            modalShow: !prevState.modalShow
        }))
        console.log(this.state.modalShow)
    }



    render() {
        return(
            <div className='home-container'>
                <SearchModal handleModal={this.handleModal} modalShow={this.state.modalShow}/>
                <SideNav logOut={this.props.logOut} handleModal={this.handleModal}/>
                <FriendsList />
                <ChatRoom />
            </div>
        )
    }



}

export default Home;