import React from 'react'
import './GetInvolved.css'
import { NavLink, Outlet } from 'react-router-dom'

function GetInvolved() {

  return (
    <div className='bg-light'>
      <div className="buttons container getinvolved__container py-5 d-flex">
          <NavLink to='partner' className='btn btn-lg btn-outline-secondary rounded-5'>GET CONNECTED</NavLink>
          <NavLink to='ministries' className='btn btn-lg btn-outline-secondary rounded-5'>MINISTRIES</NavLink>
          <NavLink to='cells' className='btn btn-lg btn-outline-secondary rounded-5'>HOME CELLS</NavLink>
          <NavLink to='newBeliever' className='btn btn-lg btn-outline-secondary rounded-5'>I AM A NEW BELIEVER</NavLink>
      </div>
      <Outlet />
    </div>
  )
}

export default GetInvolved