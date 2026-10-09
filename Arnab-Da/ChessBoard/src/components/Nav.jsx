import React from 'react'

const Nav = () => {
  return (
    <div>
      <h1 className='bg-amber-500 text-black w-full p-2 text-center text-4xl'>Chess board</h1>
        <h1 className='bg-amber-500 text-black w-full p-2 text-center text-4xl flex gap-5'>
          <span className='flex-1 bg-amber-600 p-5'>
            <a href="">Black background</a>
          </span>
          <span className='flex-1 bg-amber-600 p-5'>
            <a href="">White background</a>
          </span>
        </h1>
    </div>
  )
}

export default Nav