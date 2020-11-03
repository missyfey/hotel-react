import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'
import ComponentTitle from './ComponentTitle'
import Room from './Room'
import Loading from './Loading'

export default function FeaturedRooms() {
    const context = useContext(RoomContext)
    let {featuredRooms , loading} = context

    featuredRooms = featuredRooms.map((room , index)=>{
        return <Room room={room} key={index} />
    })
    return (
        <div className="featured-rooms">
            <section>
                <ComponentTitle title='featured rooms' />
                <div className="featured-room-center">
                    {loading ? <Loading /> : featuredRooms}
                </div>
            </section>
        </div>
    )
}
