import React, { useRef } from 'react'

const USERef = () => {

  const heading = useRef(null)

  console.log("Sanjib")
  
  const changeText=()=>{
        heading.current.textContent="Hello Sanjib"
  }
  return (
    <>
        <div ref={heading}>We are learning UseRef</div>
        <button onClick={changeText}>Change heading</button>
    </>
  )
}

export default USERef

// useref  is used to store a value that doesn/t need to re-render
// also used to access DOM directly like an input BOX
