import React, { useState } from 'react'

const Counter = () => {

  let [num, setNum] = useState(0)

  let increaseNum=()=>{
    setNum(num+1)
  }
  let decreaseNum=()=>{
    setNum(num-1)
  }
  let jump5=()=>{
    setNum(num+5)
  }

  return (
    <div className='p-10 text-4xl bg-amber-300 w-400 h-100 flex  justify-center items-center gap-10'>
      
      <button className='p-10 20 bg-amber-600 text-white' onClick={increaseNum}>Increase</button>
      <h1 className='w-fit bg-amber-500 p-10 20 rounded-4xl' >{num}</h1>
      <button onClick={decreaseNum} >Decrease</button>
      <button onClick={jump5}>Jump by 5</button>
    </div>
  )
}

export default Counter