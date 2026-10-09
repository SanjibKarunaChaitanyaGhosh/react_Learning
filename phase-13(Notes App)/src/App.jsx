import { useState } from 'react'



const App = () => {

  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')

  const submitHandler=(e)=>{
    // console.log("..form Submitted");
    e.preventDefault()

  }

  return (

    <div className='bg-black h-screen lg:flex text-amber-50 '>
      
      <form className='flex flex-col lg:w-full gap-5 p-10 items-start ' 
          onSubmit={(e)=>{
              submitHandler(e)
              setTitle('')
              setDetails('')
          }}  
        >
          <h1 className='text-3xl font-bold p-10 w-full text-center'>Add Notes </h1>

          {/* first input for heading */}
          <input 
            type="text" 
            placeholder='Enter Notes Heading'
            className='font-medium w-full px-5 py-2 border-2 rounded-2xl outline-none'
            value={Title}
            onChange={(e)=>{
              // console.log("Hello")
              setTitle(e.target.value)
            }}
            />

          {/* second input Detailed for Text area */}
          <textarea
            type="text" 
            placeholder='Writes Details' 
            className='font-medium w-full px-5 py-8 b-5 border-2 rounded-2xl outline-none flex items-start h-40'
            value={Details}
            onChange={(e)=>{
              // console.log(e.target.value);
              setDetails(e.target.value);
            }}  
            />

        <button className='w-full bg-white text-black px-5 py-2 rounded-2xl outline-none'>
          Add Notes</button>

      </form>

      <div className='h-screen  bg-gray-950  p-10 lg:w-full lg:border-l-2'>
          <h1 className='text-3xl font-bold text-center p-10'>Recent Notes </h1>
          <div className='flex gap-3 flex-wrap pt-10 h-full overflow-auto'>
            <div className='h-50 w-30 bg-amber-50 rounded-2xl'></div>
            <div className='h-50 w-30 bg-amber-50 rounded-2xl'></div>
            <div className='h-50 w-30 bg-amber-50 rounded-2xl'></div>
          </div>
      </div>
    </div>

  )
}

export default App