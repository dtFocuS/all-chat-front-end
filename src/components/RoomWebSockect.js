import React, { Component } from 'react';

class RoomWebSocket extends Component {
    componentDidMount() {
        // if I don't use the getRoomData() function here, nothing renders on the RoomShow component
        this.props.getRoomData(this.props.room.id)
        // the subscriptions.create() method is sending params to the subscribed action in my RoomsChannel
        this.props.cableApp.room = this.props.cableApp.cable.subscriptions.create({
            channel: 'RoomsChannel',
            room: this.props.room.id
        }, 
        {
            received: (updatedRoom) => {
                this.props.updateApp(updatedRoom)
            }
        }) 
    }

    render() {
        return (
            <div></div>
        )
    }
}

export default RoomWebSocket