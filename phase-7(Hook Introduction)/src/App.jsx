import React from 'react'

const App = () => {

  let a=20;

  return (
    <div>
        <h1>Hooks Introduction {a}</h1>
        <button onClick={()=>{
            console.log(a)
              a++
            console.log(a)
          }}>Click</button>
    </div>
  )
}
// you cant cahange directly,thats why we can't see
export default App