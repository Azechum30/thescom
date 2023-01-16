import React from 'react'
import './OurBeliefs.css'
import {vision} from './Data'
import Vision from './Vision'

function OurBeliefs() {
  return (
    <div className='container py-5'>
      {vision.map(({visionStatement, missionStatement, key}) =>(
        <Vision visionStatement={visionStatement} missionStatement={missionStatement} key={key} />
      ))}
    </div>
  )
}

export default OurBeliefs