import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'
import SocialLinks from './SocialLinks'

function SharedLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <SocialLinks />
      <Footer />
    </div>
  )
}

export default SharedLayout