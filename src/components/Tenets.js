import React from 'react'
import { OtherBeliefs, beliefSystem } from './Data'
import './Tenets.css'

function Tenets({tenets}) {
  return (
    <div className='container py-5' style={{fontFamily : 'Poppins', lineHeight: '35px'}}>
      <h2 className="tenets__title text-center mb-3 pb-4" style={{borderBottom: '1px solid lightgrey'}}>TENETS OF THESCOM</h2>
      <div className="row gx-3">
        <div className="col-sm-12 col-lg-6 mb-0">
        {tenets}
        </div>
        <div className="col-sm-12 col-lg-6 py-3">
          {beliefSystem.map(({beliefs, key}) =>(
          <OtherBeliefs beliefs={beliefs}  key={key}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tenets