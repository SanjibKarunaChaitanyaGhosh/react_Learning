import { MoveRight } from 'lucide-react'

const CardButton = (props) => {
  return (
    <div className='flex justify-between'>
        <button style={{backgroundColor:props.color}} className='px-7 py-2 text-white rounded-bl-2xl rounded-se-2xl font-medium'>{props.tag}</button>
        <button className=' bg-blue-800 rounded-full px-4 text-white'><MoveRight size={25} strokeWidth={1} /></button>
    </div>
  )
}

export default CardButton