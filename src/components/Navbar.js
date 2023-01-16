import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [bgColor, setBgColor] = useState(false);

  const changeBgColor = () =>{
    if(window.scrollY >= 1){
      setBgColor(true)
    } else{
      setBgColor(false);
    }
  }

  window.addEventListener('scroll', changeBgColor)
  return (
    <div className={bgColor ? 'navbar navbar-expand-lg navbar-light bg-dark fixed-top' : 'navbar navbar-expand-lg bg-white fixed-top'} role='navigation'>
      <NavLink to='/' className={bgColor ? 'navbar-brand text-white' : 'navbar-brand'}>THESCOM</NavLink>
      <button className="navbar-toggler" type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id='navbarSupportedContent'>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <NavLink to='/' style={({isActive})=>{
              return {color : isActive ? 'blue' : 'gray' }
          }} className='nav-link text-uppercase'>Home</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to='/about' style={({isActive})=>{
              return { color : isActive ? 'blue' : 'gray'}
            }} className='nav-link text-uppercase'>About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/missions' style={({isActive})=>{
              return { color : isActive ? 'blue' : 'gray'}
            }} className='nav-link text-uppercase'>Missions</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/getinvolved' style={({isActive})=>{
              return { color : isActive ? 'blue' : 'gray'}
            }} className='nav-link text-uppercase'>Get Involved</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/media' style={({isActive})=>{
              return { color : isActive ? 'blue' : 'gray'}
            }} className='nav-link text-uppercase' >Media Center</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/contact' style={({isActive})=>{
              return { color : isActive ? 'blue' : 'gray'}
            }} className='nav-link text-uppercase'>Contact Us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar