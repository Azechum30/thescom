import React from 'react'
import './Intro.css'

function Intro({imageUrl, description}) {
  return (
    <section className="container__intro">
      <div className='container mx-auto row gx-4 gy-4 py-3'>
          <div className="col-sm-12 col-lg-6">
            <div className="card">
              <div className="card-body">
                <img src={imageUrl} alt='churcg worship' width='100%'/>
              </div>
            </div>
          </div>           
          <div className="col-sm-12 col-lg-6">
            <div className="card-text text-justify">
              {description}
            </div>
          </div>
      </div>
    </section>
  )
}

export default Intro