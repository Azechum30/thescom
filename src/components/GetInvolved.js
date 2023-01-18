import React from 'react'
import './GetInvolved.css'
import { NavLink, Outlet } from 'react-router-dom'
import Locations from './Locations'

function GetInvolved() {

  return (
    <div className='top-container'>
      <div className="buttons container getinvolved__container py-5 d-flex">
          <NavLink to='partner' className='btn btn-lg btn-outline-secondary rounded-5'>GET CONNECTED</NavLink>
          <NavLink to='ministries' className='btn btn-lg btn-outline-secondary rounded-5'>MINISTRIES</NavLink>
          <NavLink to='cells' className='btn btn-lg btn-outline-secondary rounded-5'>HOME CELLS</NavLink>
          <NavLink to='newBeliever' className='btn btn-lg btn-outline-secondary rounded-5'>I AM A NEW BELIEVER</NavLink>
      </div>
      <div className="others bg-white w-100">
        <div className="row py-4 mx-auto">
          <div className="col-sm-12 col-lg-6 nlv-img">
            
          </div>
          <div className="col-sm-12 col-lg-6 congregants">

          </div>
        </div>
      </div>
      <div className="outlets">
        <Outlet />
      </div>
      <Locations title='WOULD YOU LIKE TO SERVE IN THE HOUSE OF GOD?' link='partner' linkTitle='GET CONNECTED' bgColor='#fcb650'/>
    </div>
  )
}

export default GetInvolved