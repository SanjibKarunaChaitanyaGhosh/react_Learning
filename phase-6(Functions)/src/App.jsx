import React from 'react'

const App = () => {

  function btnClicked(){
    console.log(("button is clicekd"));
  }

  const mouseEnter=()=>{
    console.log('Mouse Entered')
  }

  const doubleClicked=()=>{
    console.log('button is doubleClicked')
  }

  const onchange=(elem)=>{
    console.log(elem.target.value)
  }

  return (
    <div>
      <h1>Hello Sanjib</h1>
      <button onClick={btnClicked} onMouseEnter={mouseEnter} >Change user</button>
      <button onDoubleClick={doubleClicked}>Double Clicked</button>

      <button onClick={function(){
                                  console.log("Hello Guys")
                                }}>hello
      </button>

      

      <input type="text" placeholder='Type your name here' onChange={(elem)=>{
        console.log("user is typing",elem.target.value)
      }}/>

      <input type="text" placeholder='Type your name here' onChange={
        function(elem){
          onchange(elem)
        }
      }/>

      <div className='box' onMouseMove={(elm)=>{
              console.log("red box",elm)
      }}  ></div>

      <div className='Page1' onWheel={()=>{
        console.log("you are scrolling within page 1")
      }}></div>
      <div className='Page2' onWheel={()=>{
        console.log("you are scrolling within page 2")
      }}></div>
      <div className='Page3' onWheel={()=>{
        console.log("you are scrolling within page 3")
      }}></div>
    </div>
  )
}

export default App