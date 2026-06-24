import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const LeftContent = () => {
  return (
    <div className='h-full bg-amber-400 w-1/3 flex flex-col justify-between'>
        <div className='p-6'>
          <h3 className='text-7xl font-bold mb-5 leading-[1.1] '>Prospective <br /> <span className='text-gray-800'>Customer</span> <br /> segmentation</h3>
          <p className='text-xl font-medium text-gray-600 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum maxime expedita doloremque dicta eos molestiae quod nam </p>
        </div>
        <div><ArrowUpRight size={70} strokeWidth={1.5} /></div>
    </div>
  )
}

export default LeftContent