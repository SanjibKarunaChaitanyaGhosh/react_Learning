import React from 'react'
import Card from './RightSection/Card.jsx'

const RightContent = (props) => {
  // console.log(props)
  return (
    <div id="right" className='h-full w-2/3 p-5 flex flex-nowrap gap-10 overflow-x-auto' >
        {props.users.map(function(elem,idx){
          return <Card key={idx} id={idx} color={elem.color} img={elem.img} tag={elem.tag}/>
        })}
    </div>
  )
}

export default RightContent