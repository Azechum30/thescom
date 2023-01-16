import React from 'react'
import './History.css'
function History({description}) {
  return (
    <div>
      <p className='text-justify'>{description}</p>
    </div>
  )
}

export default History