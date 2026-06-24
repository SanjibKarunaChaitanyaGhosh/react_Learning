import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = () => {
  return (
    <div className='py-10 px-20 bg-amber-200 h-[90vh] flex gap-10 items-center'>
        <LeftContent/>
        <RightContent/>
    </div>
  )
}

export default Page1Content
