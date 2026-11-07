import React from 'react'

const GrandParent = ()=>{
  console.log("Grand Parent Clicked...")
}

const Parent = (e)=>{
  // e.stopPropagation()
  console.log("Parent Clicked...")
}

const Child = (e)=>{
  // e.stopPropagation()
  console.log("Child Clicked...")
}


const EventPropagation = () => {
  return (
    <>
    <div>EventPropagation(bottom to top) and Capturing Phase(TOP-to-BOTTOM)</div>
    <div className='w-100 p-8 bg-amber-300' onClickCapture={()=>GrandParent()}>
      <div className='w-80 p-8 bg-amber-700' onClick={Parent}>
        <div className='w-60 p-8 bg-amber-900 text-2xl text-white' onClick={(e)=>Child(e)}>Click Me</div>
      </div>
    </div>
    
    </>
  )
}

export default EventPropagation