import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Navbar from './components/Navbar'
import PassEventAsProps from './components/PassEventAsProps'
import State from './components/State'
import EventPropagation from './components/EventPropagationAND_capturing'
import StateLevel_1 from './components/StateLevel_1'
import Registration from './components/Registration'
import ObjectStateManagement from './components/ObjectStateManagement'
import Student_Management_System from './components/Student_Management_System'
import Understanding_Edit_in_React from './components/Understanding_Edit_in_React'


const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<h1>This is home page</h1>}/>

        <Route path="/about"element={<About />}/>

        {/* PassEventAsProps */}
        <Route path='/passeventasprops' element={<PassEventAsProps/>} />

        {/* EventPropagation */}
        <Route path='/eventpropagation' element={<EventPropagation/>} />

        {/* State */}
        <Route path='/state' element={<State />} />
        
        {/* State Level 1 exercises */}
        <Route path='/statelevel1' element={<StateLevel_1 />} />

        {/* input field practice */}
        <Route path='/registration' element={<Registration />} />

        {/* object-State-Management */}
        <Route path='objectstatemanagement' element={<ObjectStateManagement />} />
        
        {/* Student_Management_System */}
        <Route path='studentmanagement_system' element={<Student_Management_System />} />
        
        {/* Understanding Edit in React */}
        <Route path="editstudentinfo" element={ <Understanding_Edit_in_React /> } />

      </Routes>
    </>
  )
}

export default App
