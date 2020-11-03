import React from 'react'
import ComponentTitle from './ComponentTitle'
import {FaCocktail , FaHiking , FaShuttleVan, FaBeer} from "react-icons/fa"
export default function Services() {

    return (
        <div className="services">
            <section>
            <ComponentTitle title='services'/>
            <div className="services-center">
                <div className="services-item">
                    <span className="services-icon"><FaCocktail /></span>
                    <h4>Free Cocktails</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </div>
                <div className="services-item">
                    <span className="services-icon"><FaHiking /></span>
                    <h4>Endless Hiking</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </div>
                <div className="services-item">
                    <span className="services-icon"><FaShuttleVan /></span>
                    <h4>Free Shuttle</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </div>
                <div className="services-item">
                    <span className="services-icon"><FaBeer /></span>
                    <h4>Strongest Beer</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!</p>
                </div>
            </div>
        </section>
        </div>
    )
}
