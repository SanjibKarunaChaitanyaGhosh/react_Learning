import { Component } from "react";


// Css styles
const bodyWrapper = {
  backgroundColor:"gray",
  minHeight:"100vh",
  display:"grid",
  placeItems:"center"
}

const btn={
  backgroundColor:"#2e2e2e",
  padding:"5px 10px",
  color:"white",
  fontSize:"3rem",
  borderRadius:"5px"
}

const resetBtn={
  ...btn,
  backgroundColor:"red",
  padding:"10px 20px",
}
// class Sanjib extends Component{
//   render(){
//     return <div>
//         <h1>
//           Sanjib Ghosh
//         </h1>
//     </div>
//   }
// }

class Count extends Component{
  constructor(props){
    super(props)
    this.state={
      count:0
    }
  }

  increase=()=>{
    this.setState(
      {
        count:this.state.count+1
      }
    )
  }
  decrease=()=>{
    this.setState(
      {
        count:this.state.count-1
      }
    )
  }
  

  render(){
    return <div style={bodyWrapper}>
      <h1>{this.state.count}</h1>
      <button style={btn} onClick={this.increase}>Increase</button>
      <button style={resetBtn} onClick={()=>{
        this.setState(
          {count:0}
        )
      }}>Reset</button>
      <button onClick={this.decrease}
        className="btn btn-primary"
      >decrease</button>
    </div>
  }
}

export default Count