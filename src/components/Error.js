import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function Error() {
  return (
    <div>
        <div className="text-center py-4">
          <h3 className='display-5 fw-bold'>404</h3>
          <p className='text-danger mb-0'>Page not Found!!</p>
        </div>
    </div>
  )
}

export default Error