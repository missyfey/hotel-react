import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'
import ComponentTitle from '../components/ComponentTitle'
import RoomsFilter from '../components/RoomsFilter'
import RoomsList from '../components/RoomsList'
export default function Rooms() {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner>
                    <Title title='our rooms' subtitle=''/>
                    <button className="banner-btn btn"><Link to="/" >return home</Link></button>
                </Banner>
            </Hero>
            <section className="rooms-page">
                <ComponentTitle title='Search Rooms'/>
                <RoomsFilter />
                <RoomsList />
            </section>
        </>
    )
}
