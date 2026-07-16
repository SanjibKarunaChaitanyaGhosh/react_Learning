import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState({user:"Sanjib",age:20})
  const [num1, setNum1] = useState({user:"Arnab",age:20})

  // DESTRUCTURING METHOD TO CHANGE THE USER AND AGE
  const btnClicked=()=>{
    // console.log(num)
    const newNum={...num};
    newNum.user="Ghosh"
    setNum(newNum)
    
    setNum1(prev=>({...prev,age:50}))
    setNum1(prev=>({...prev,age:50}))
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App