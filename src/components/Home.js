import React from 'react'
import './Home.css'
import Intro from './Intro'
import { Data } from './Data'
import Hero from './Hero'
import WeeklyMeetings from './WeeklyMeetings'
import Locations from './Locations'




function Home() {
  return (
    <section className='section__home'>
      <div>
        <Hero />
      </div>
      <div>
        {Data.map(({imageUrl, descriptions, key }) =>(
          <Intro key={key} imageUrl={imageUrl} description={descriptions}/>
        ))}
      </div>
      <WeeklyMeetings />
       <Locations title='ONE CHURCH IN MANY LOCATIONS' link='/contact' linkTitle='FIND A LOCATION' />
    </section>
  )
}

export default Home