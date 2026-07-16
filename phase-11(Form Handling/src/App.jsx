const App = () => {

const sumbmitHandler=(elm)=>{
  elm.preventDefault()
  console.log("form submitted")
}

  return (
    <div>
      <form onSubmit={sumbmitHandler} >
        <input type="text" placeholder="Enter your name..." />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App