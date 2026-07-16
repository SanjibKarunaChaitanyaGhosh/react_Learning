import { useState } from "react"

const App = () => {

const [title, setTitle] = useState('Sanjib')

const sumbmitHandler=(elm)=>{
  elm.preventDefault()
  console.log("form submitted")
}

  return (
    <div>
      <form onSubmit={sumbmitHandler} >
        <input type="text" placeholder="Enter your name..." value={title} onChange={(elm)=>{
          setTitle(elm.target.value);
                  }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App