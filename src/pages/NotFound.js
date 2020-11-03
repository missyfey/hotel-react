import React from 'react'
import {Link} from 'react-router-dom'
import Hero from '../components/Hero'
import Title from '../components/Title'
import Banner from '../components/Banner'

export default function NotFound() {
    return (
        <>
        <Hero>
            <Banner>
                <Title title='404!' subtitle='page not found'/>
                <button className="banner-btn btn"><Link to="/" >return home</Link></button>
            </Banner>
        </Hero>
        </>
    )
}
