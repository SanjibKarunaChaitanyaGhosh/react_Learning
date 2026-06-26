import React from 'react'
import Image from './Image.jsx'
import CardText from './CardText.jsx'

const Card = (props) => {
  return (
    <div className='w-1/3 h-full rounded-4xl relative shrink-0 overflow-hidden'>
        <Image img={props.img}/>
        <div className='absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between text-2xl'>
            <h1 className='w-14 h-14 rounded-full bg-amber-50 flex justify-center items-center font-bold '>{props.id+1}</h1>
            <CardText tag={props.tag} color={props.color}/>
        </div>
    </div>
  )
}

export default Card