import React from 'react'
import LeftContent from './LeftContent.jsx'
import RightContent from './RightContent.jsx'

const Page1Content = (props) => {
  return (
    <div className='py-10 px-20 h-[90vh] flex gap-10 items-center'>
        <LeftContent/>
        <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
