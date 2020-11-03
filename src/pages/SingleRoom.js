import React, { Component } from 'react'
import { RoomContext} from '../context'
import {Link} from 'react-router-dom'
import StyledHero from '../components/StyledHero'
import Title from '../components/Title'
import Banner from '../components/Banner'

export default class SingleRoom extends Component {  
    constructor(props){
        super(props)
        this.state={
            slug:''
        }
    } 
    static contextType = RoomContext
    render() {
        const singleContext = this.context
        const slug = this.props.match.params.slug
        let room = singleContext.getRoom(slug)
        room = room[0]
        if(!room || room.length === 0){
            return (
                <div className="no-result">
                    <h3>NO SUCH ROOM COULD BE FOUND...</h3>
                    <button className="banner-btn btn"><Link to="/rooms" >back to rooms</Link></button>
                </div>
            )
        }
        let {breakfast , capacity , description , extras, images , name, pets, price, size} = room
        
        const [mainImg , ...defaultImg]  =images
        return (
            <>
            <StyledHero img={mainImg}>
                <Banner>
                    <Title title={name} subtitle=''/>
                    <button className="banner-btn btn"><Link to="/rooms" >back to rooms</Link></button>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className="room-images">
                    {defaultImg.map((image,index)=>{
                        return <img src={image} key={index} alt={`${name} room - ${index} `}/>
                    })}
                </div>
                <div className="details">
                    <div>
                        <h3>Details</h3>
                        <p>{description}</p>
                    </div>
                    <div className="info">
                        <h3>Info</h3>
                        <p>Price: ${price}</p>
                        <p>Size: {size} SQFT</p>
                    <p>Max Capacity: {capacity} {capacity>1 ? 'People' : 'Person'}</p>
                    {pets ? <p>Pets Allowed</p> : null}
                    {breakfast ? <p>Free Breakfast Included</p> : null}
                    </div>
                </div>
                <div>
                    <h3>Extras</h3>
                    <ul className="extras">
                    {extras.map((item,index)=>{
                        return <li key={index}>- {item}</li>
                    })}
                    </ul>
                </div>
            </section>
            </>
        )
    }
}
