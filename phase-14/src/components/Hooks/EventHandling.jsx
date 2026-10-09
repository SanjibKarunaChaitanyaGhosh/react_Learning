import React from 'react'

// const EventHandling = () => {

//     const handleClick = ()=>{
//         alert("Welcome")
//     }
//   return (
//     <>
//         <h3>EventHandling</h3>
//         <button onClick={handleClick}>Click me</button>
//     </>
//   )
// }

const EventHandling = () => {

    const handleMouseMove = ()=>{
        alert("Welcome")
    }
  return (
    <>
        <h3>EventHandling</h3>
        <button onMouseMove={handleMouseMove}>Click me</button>
    </>
  )
}

export default EventHandling

// Event Handling means performing actions when user intracts with UI.
// Exmaple : Click, Typing, submit, hover