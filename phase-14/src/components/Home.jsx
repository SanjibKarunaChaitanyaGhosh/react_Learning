import React from 'react'
import Navbar from './Navbar'

const Home = ({name,number}) => {
    let course = "React"
    
  return (
    <>
    <Navbar />
    {/* <div>Home {props.name} {course} {props.number}</div> */}
    <div>Destrructring Props using {name},{number}</div>
    {/* <div>Home {props.age} {course} </div> */}
    </>
  )
}

export default Home