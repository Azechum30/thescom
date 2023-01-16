import React from 'react'

function Vision({visionStatement, missionStatement}) {
  return (
    <div>
      <h2 className='my-4'>WHAT WE BELIEVE</h2>
      <h3 style={{fontSize : '21px', marginBottom : '18px'}}>OUR VISION</h3>
      <div>{visionStatement}</div>
      <h3 style={{marginBottom : '18px', fontSize : '21px'}}>OUR MISSION</h3>
      <div>
        {missionStatement}
      </div>
    </div>
  )
}

export default Vision