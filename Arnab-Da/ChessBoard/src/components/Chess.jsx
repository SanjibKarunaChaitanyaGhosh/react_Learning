import React from 'react'
import Nav from './Nav'
import Box from './Box'


const Chess = () => {

  return (

    <div className='flex flex-col'>

      {/* navbar */}
        <Nav/>

      {/* chessboard started here */}
      <section className='flex items-center justify-center'>
              <Box/>
      </section>
    </div>
  )
}

export default Chess