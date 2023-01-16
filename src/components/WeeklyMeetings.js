import React from 'react'
import './WeeklyMeetings.css'
import Service from './Service'
import {Services} from './Data'
import { NavLink } from 'react-router-dom'

function WeeklyMeetings() {
  return (
    <div className='py-4 mb-0'>
      <h2 className="service__heading text-center py-4">OUR WEEKLY SERVICES</h2>
      
      <div className='container-fluid d-flex text-center bg-none'>
        {Services.map(({serviceImage, serviceDesc, key}) =>(
        <Service key={key} serviceImage={serviceImage} serviceDescription={serviceDesc} />
      ))}
      </div>

      <div className="container-fluid text-center member__section py-4">
        <h2 className="fs-2 py-3">ARE YOU A NEW CHRISTIAN OR A NEW MEMBER?</h2>
        <NavLink to='/getinvolved' className="getInvolved btn btn-lg btn-outline-primary px-3 py-3 rounded-5">GET INVOLVED</NavLink>
      </div>
    </div>
  )
}

export default WeeklyMeetings