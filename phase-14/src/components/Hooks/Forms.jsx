import React, { useState } from 'react'

const Forms = () => {
    const [name, setName] = useState("")
    const formHandler=(e)=>{
        e.preventDefault()
    }

    // console.log(name);
    console.log("Sanjib");
    
    
  return (
    <>
        <div>Forms</div>
        <form onSubmit={formHandler}>
            <input type="text" placeholder='Enter your message here..' onChange={(e)=>setName(e.target.value)}/>
            <button type='submit'>submit</button>
        </form>
    </>
  )
}

export default Forms

// Forms can be handles in two ways

// i> Controlled way - Recomended (Controls Input values using useState)
// ii> UnControlled way - Dom controls Input values using useRef
// input Field -> State(Updated) --> UI update