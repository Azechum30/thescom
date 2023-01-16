import React from 'react'
import './About.css'
import { Data, ApostleBioData, tenetsOfFaith } from './Data'
import History from './History'
import Leadership from './Leadership'
import Locations from './Locations'
import OurBeliefs from './OurBeliefs'
import Tenets from './Tenets'


const hist = ApostleBioData.map((value, key) => {
  return value
})

function About() {

  const desc = Data.map((value) =>{
    return value;
  })
  return (
    <section className='about__section'>
      <div className="head__section py-5 container text-center">
          <h2 className="about__title py-4">THESCOM'S HISTORY</h2>
          <div className="history">
            <History description={desc[0].descriptions} />
          </div>

      </div>
      <div className="leadership bg-white container-fluid text-dark text-center">
        <h2 className="pt-5 card-header leadership__title">THESCOM'S LEADERSHIP</h2>
      <div className="thescom__leadership container">
        <Leadership description={hist[0].descriptions} imageUrl={hist[0].imageUrl}/>
      </div>
      </div>

      <div className="beliefs">
        <OurBeliefs />
      </div>
      <div className="tenets__container bg-white" style={{marginTop: '-25px'}}>
        {tenetsOfFaith.map(({principle, key}) =>(
          <Tenets tenets={principle} key={key} />
        ))}
      </div>
      <Locations title='ONE CHURCH IN MANY LOCATIONS' link='/contact' linkTitle='FIND A LOCATION'/>
    </section>
  )
}

export default About