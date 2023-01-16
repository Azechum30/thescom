import React from 'react'

function Leadership({imageUrl, description}) {
  return (
    <div className='leader__section py-5'>
        <div className="row gy-3 gx-3">
          <div className="col-sm-6">
            <div className='text-justify'>{description}</div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <div className="card-img">
                  <img src={imageUrl} alt="leader" width='100%'/>
                </div>
                <div className="card-header">
                  <h4 className='card-title'>Apostle Jacob Napari</h4>
                  <small className="card-caption">(Leader, THESCOM)</small>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Leadership