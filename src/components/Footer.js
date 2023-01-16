import React from 'react'
import './Footer.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'


function Footer() {
  return (
    <div>
      <footer className="container-fluid text-center py-3 bg-dark">
        <small className='footer-text'>&copy; 2023 All rights reserved</small>
      </footer>
    </div>
  )
}

export default Footer