// used for State management without using this.state or this.setState()
import { useState } from "react"

const UseState = () => {
    const [count, setcount] = useState(0)
    console.log(count)
  return (
    <>
    <div>UseState-CounterAPP</div>
    <h3>{count}</h3>
    <button onClick={()=>setcount(count+1)}>Increase</button>
    <button onClick={()=>setcount(0)}>Reset</button>
    <button onClick={()=>setcount(count-1)}>Decrease</button>
    </>   
  )
}

export default UseState