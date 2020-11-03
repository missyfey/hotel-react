import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
export default function Home() {
    return (
        <>
            <Hero>
                <Banner>
                    <Title title='Luxurious rooms' subtitle='Deluxe Rooms Starting At $299'/>
                    <button className="banner-btn btn"><Link to="/rooms" >our rooms</Link></button>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

