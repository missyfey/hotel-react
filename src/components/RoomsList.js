import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import Loading from './Loading'
import Room from './Room'

export default function RoomsList() {
    const context = useContext(RoomContext)
    let {loading , sortedRooms} = context

    if(loading){
        return <Loading />
    }
    const rooms = sortedRooms.map((room, index)=>{
        return <Room room={room} key={index}/>
    })
    if(rooms.length === 0){
        return <div className="no-result">
            <h3>Unfortunately No Rooms Matched Your Search Parameters</h3>
        </div>
    }
    return (
        <div className='room-list-center'>
            {rooms}
        </div>
    )
}
