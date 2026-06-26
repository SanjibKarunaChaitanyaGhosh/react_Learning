import React from 'react'

import LeftText from './LeftSection/LeftText.jsx'
import LeftArrow from './LeftSection/LeftArrow.jsx'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
       <LeftText/>
       <LeftArrow/>
    </div>
  )
}

export default LeftContent