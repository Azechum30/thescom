import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Missions from './components/Missions';
import SharedLayout from './components/SharedLayout';
import Error from './components/Error';
import GetInvolved from './components/GetInvolved';
import Media from './components/Media';
import Contact from './components/Contact';
import Partner from './components/Partner';
import Ministries from './components/Ministries';
import NewBeliever from './components/NewBeliever';
import HomeCells from './components/HomeCells';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='missions' element={<Missions />} />
          <Route path='getinvolved' element={<GetInvolved />} >
            <Route path='partner' element={<Partner />}/>
            <Route path='ministries' element={<Ministries />}/>
            <Route path='cells' element={<HomeCells />}/>
            <Route path='newBeliever' element={<NewBeliever />}/>
          </Route>
          <Route path='/media' element={<Media />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App