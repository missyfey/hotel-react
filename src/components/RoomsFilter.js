import React from 'react'
import {useContext} from 'react'
import {RoomContext} from '../context'

export default function RoomsFilter() {
    const context = useContext(RoomContext)
    let {rooms, minPrice, maxPrice, maxSize, minSize, handleChange, type,price, breakfast, pets} = context
    
    
    function getUnique(array, kind){
        let kinds = array.map(item =>{
            return item[kind]
        })
        return [...new Set(kinds)]
    }

    let types = getUnique(rooms , 'type');
    types = ['all', ...types]
    types = types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })

    let guests = getUnique(rooms , 'capacity')
    //sort guests
    guests.sort(function(a,b){
        return a-b
    })    
    guests = guests.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    })
    

    return (
        <div className="filter-room-container">
            <div className="input-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" onChange={handleChange}>
                    {types}
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="capacity">guests</label>
                <select name="capacity" id="capacity" onChange={handleChange}>
                    {guests}
                </select>
            </div>
            <div className="input-group">
                <label htmlFor="price">room price ${price}</label>
                <input type="range"  name='price' value={price} min={minPrice} max={maxPrice} onChange={handleChange}/>
            </div>
            <div className="input-group">
                <label htmlFor="size">room size</label>
                <div className="size-input">
                    <input id="minSize" name="minSize" value={minSize} type="number"  onChange={handleChange}/>
                    <input id="maxSize" name="maxSize" value={maxSize} type="number"  onChange={handleChange}/>
                </div>
            </div>
            <div className="input-group">
                <div className="input-checkbox">
                    <input type="checkbox" name="breakfast" onChange={handleChange}/>
                    <label htmlFor="breakfast">breakfast</label>
                </div>
                <div className="input-checkbox">
                    <input type="checkbox" name="pets" onChange={handleChange}/>
                    <label htmlFor="pets">pets</label>
                </div>
            </div>
        </div>
    )
}
