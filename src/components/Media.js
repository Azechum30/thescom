import React from 'react'
import { Outlet } from 'react-router-dom'

function Media() {
  return (
    <div>
      <h2>Media items here</h2>
      <Outlet />
    </div>
  )
}

export default Media