import React from 'react'
import SBCube from './SBCube'
import SWCube from './SWCube'


const Box = () => {
  return (
    <div className='bg-black'>
        <div className='grid grid-cols-8 p-10'>
            <SWCube />
            <SBCube />
            <SWCube />
            <SBCube />
            <SWCube />
            <SBCube />
            <SWCube />
            <SBCube />
        </div>
    </div>
  )
}

export default Box