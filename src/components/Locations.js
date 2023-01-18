import React from 'react'
import { NavLink } from 'react-router-dom'
import './Locations.css'

function Locations({title, link, linkTitle, bgColor}) {
  return (
    <div className='location__container' style={{backgroundColor: bgColor}}>
          <h3 className="fs-3 mb-0">{title}</h3>
          <NavLink to={link} className='btn btn-lg btn-outline-danger rounded-5' style={({isActive})=>({backgroundColor: isActive ? 'gray' : 'transparent', color: isActive ? 'white' : 'white'})}>{linkTitle}</NavLink>
    </div>
  )
}
export default Locations 