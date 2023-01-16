import React from 'react'
import './WeeklyMeetings.css'

function Service({serviceImage, serviceDescription}) {
  return (
     <div className="row gy-3">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
          <div className="card-image">
            <a className='text-decoration-none text-black' href='https://www.facebook.com' target='__blank'><img src={serviceImage} alt="Congregation Praying" width='100%' /> </a>
          </div>
            <div className="card-header">
              <a href='https://www.facebook.com' target='__blank' className="card-title text-center text-decoration-none text-black fs-5">{serviceDescription}</a>
            </div>
          </div>
        </div>
      </div>
     </div>
  )
}

export default Service