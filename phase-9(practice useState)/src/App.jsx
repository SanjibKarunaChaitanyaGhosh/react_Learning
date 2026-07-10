import React from 'react'
import { useState } from 'react'

const App = () => {

  let [num, setNum] = useState(0)

  let Increase=()=>{
    setNum(num+1)
  }
  let Decrease=()=>{
    setNum(num-1)
  }


  return (
    <div className='bg-amber-500 w-fit p-40 m-70 flex justify-center items-center gap-30 rounded-full'>
      <button className='bg-amber-900 p-10 text-2xl rounded-full text-white' onClick={Increase}>Increase</button>
      <h1 className='bg-amber-900 p-10 text-2xl rounded-full text-white'>{num}</h1>
      <button className='bg-amber-900 p-10 text-2xl rounded-full text-white' onClick={Decrease}>Decrease</button>
    </div>
  )
}

export default App