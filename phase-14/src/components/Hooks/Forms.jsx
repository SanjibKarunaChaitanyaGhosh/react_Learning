import React, { useRef, useState } from 'react'

const Forms = () => {
    // const [name, setName] = useState("")
    const [val, setVal] = useState("")
    const inputRef = useRef()

    const formHandler=(e)=>{
        e.preventDefault()
        console.log(inputRef.current.value);
        setVal(inputRef.current.value);
    }

    // console.log(name);
    console.log("Sanjib")

    
    
    
  return (
    <>
        <div>Forms</div>
        <form onSubmit={formHandler}>
            {/* <input type="text" placeholder='Enter your message here..' onChange={(e)=>setName(e.target.value)}/> */}
            <input type="text" placeholder='Enter your message here..' ref={inputRef}/>
            <button type='submit'>submit</button>
            <h1>{val}</h1>
        </form>
    </>
  )
}

export default Forms

// Forms can be handles in two ways

// i> Controlled way - Recomended (Controls Input values using useState)
// ii> UnControlled way - Dom controls Input values using useRef
// input Field -> State(Updated) --> UI update