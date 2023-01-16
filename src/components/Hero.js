import React from 'react'
import './Hero.css'
import { NavLink } from 'react-router-dom'

function Hero() {
  return (
    <div className='custom'>
      <div className="hero__text container">
        <h2 className="hero__title display-2 text-center lh-1 fw-bold">The Second Coming Ministries</h2>
        <p className="hero__card-text text-center py-3 fst-italic">An Incorporated mission &emsp; |&emsp; Jesus is Coming Soon!</p>
        <NavLink to='/about' className='btn btn-lg btn-outline-primary rounded-5'>Read More</NavLink>
      </div>
    </div>
  )
}

export default Hero