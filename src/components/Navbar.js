import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import logo from '../images/logo.svg'
import {FaAlignRight} from 'react-icons/fa'

export default class Navbar extends Component{
    constructor(){
        super()
        this.state={
            isOpen:false
        }
        this.toggleMenu = this.toggleMenu.bind(this)
    }
    toggleMenu(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render(){
        return (
            <div className="nav">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/"><img src={logo} alt="hotel logo" className="btn" /></Link>
                        <button className="btn bar-btn"><FaAlignRight onClick={this.toggleMenu}/></button>
                    </div>
                    <div className={this.state.isOpen ? "navbar navbar-show" : "navbar"}>
                        <ul className="navbar-ul">
                            <li className="navbar-item">
                            <Link to="/" onClick={this.toggleMenu}>Home</Link>
                            </li>
                            <li className="navbar-item">                            
                            <Link to="/rooms" onClick={this.toggleMenu}>Rooms</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
