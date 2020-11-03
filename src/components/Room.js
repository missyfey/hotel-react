import React from 'react'
import {Link} from 'react-router-dom'
import RoomImg from '../images/room-1.jpeg'

export default function Room({room}) {
    let {images , price , slug , name} = room
    return (
        <div className="room-container">    
                <button className="banner-btn btn center-btn"><Link to={`rooms/${slug}`} >features</Link></button>
        
                <img src={images[0] || RoomImg} className="room-img" alt="hotel rooms"/>
                <div className="price-container">
                    <p>${price}</p>
                    <p>per night</p>
                </div>

            <div className="room-title">
            <p>{name}</p>
            </div>
        </div>
    )
}
