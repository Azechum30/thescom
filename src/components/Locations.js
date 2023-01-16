import React from 'react'
import { NavLink } from 'react-router-dom'
import './Locations.css'

function Locations({title, link, linkTitle}) {
  return (
    <div className='container-fluid location__container'>
          <h3 className="fs-3 mb-0">{title}</h3>
          <NavLink to={link} className='btn btn-lg btn-outline-danger rounded-5'>{linkTitle}</NavLink>
    </div>
  )
}
export default Locations 