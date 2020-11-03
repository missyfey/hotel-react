import React, { Component, createContext } from 'react'
import client from './Contentful'

const RoomContext = createContext()

class RoomProvider extends Component {
    constructor(){
        super()
        this.state ={
            rooms:[],
            sortedRooms:[],
            featuredRooms:[],
            singleRoom:{},
            loading:true,
            minPrice:0,
            maxPrice:0,
            price:0,
            size:0,
            minSize:0,
            maxSize:0,
            type:'all',
            breakfast:false,
            pets:false,
            capacity:0
        }
        this.formatData = this.formatData.bind(this)
        this.getRoom = this.getRoom.bind(this)
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.getData()
    }
    getData = async()=>{
        try{
            const response = await client.getEntries({
                content_type : 'beachResortRoom',
                order: '-fields.price'
              })
              this.formatData(response.items)
        }
        catch(error){
            console.log(error);
        }
    }

    formatData(data){
        let rooms = data
        rooms = rooms.map(item=>{
            let rooms = item.fields
            let id = item.sys.id
            let images = rooms.images.map(image=>{
                return image.fields.file.url
            })
            rooms = {...rooms , images , id}

            return rooms
        })
        let featuredRooms = rooms.filter(room => room.featured === true)
        let priceArr = rooms.map(item=>{return item.price})
        let minPrice = Math.min(...priceArr)
        let maxPrice = Math.max(...priceArr)
        let sizeArr = rooms.map(item =>{return item.size})
        let maxSize = Math.max(...sizeArr)
        this.setState({
            loading:false,
            rooms,featuredRooms,minPrice, maxPrice,maxSize,
            sortedRooms : rooms,
            price:maxPrice
        })
    }
    getRoom(slug){
        let singleRoom = this.state.rooms
        singleRoom = singleRoom.filter(room => room.slug === slug)
        return singleRoom
    }
    handleChange(event){
        let target = event.target
        let value = target.type ==='checkbox' ? target.checked : target.value
        let name = target.name
        this.setState({
            [name]:value
        }, this.filterRooms)        
    }
    filterRooms(){
        let{type, price,size,pets,breakfast,capacity, rooms, minSize, maxSize} = this.state
        console.log(this.state);
        let tempRooms = rooms
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room=>{return room.type === type})
        }
        if(capacity>1){
            tempRooms = tempRooms.filter(room=> {return capacity <= room.capacity})
        }
        tempRooms = tempRooms.filter(room =>{ return price >=room.price})
        tempRooms = tempRooms.filter(room =>{ return maxSize >=room.size && minSize <=room.size})
        if(breakfast === true){
            tempRooms = tempRooms.filter(room =>{ return room.breakfast === true})
        }
        if(pets === true){
            tempRooms = tempRooms.filter(room =>{ return room.pets === true})
        }
        this.setState({
            sortedRooms: tempRooms
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
        )
    }
}
export {RoomContext , RoomProvider}

