import React from 'react'
import { useState } from 'react'
import Counter from './components/counter'

const App = () => {

  const [num, setNum] = useState(23)
  const [username, setUsername] = useState("SRK")
  const [marks, setMarks] = useState([10,20,30])

  function changeNum(){
    setNum(33)
    setUsername("Sanjib Ghosh")
    setMarks([93,95,98])
  }

  return (
    <div>

      <h1>My real age is {num} <br /> And my name is {username} <br /> my marks are {marks[0]},{marks[1]},{marks[2]}</h1>

      <button onClick={changeNum}>Click for Change</button>

      <Counter />

    </div>
  )
}

export default App