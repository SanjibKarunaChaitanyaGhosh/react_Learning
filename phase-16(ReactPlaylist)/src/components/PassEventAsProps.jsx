import React from 'react'

const PassEventAsProps = () => {

    const HandleWelcomeUser=()=>{
        alert(`Hey welcome`)
    }
    const handlehover=()=>{
        alert(`Hey welcome Hover`)
    }

  return (
    <Welcomeuser 
        button1={()=>HandleWelcomeUser()}
        button2={()=>handlehover()}
     />
  )
}

const Welcomeuser = (props)=>{
    console.log(props)
    return(
        <>
            <button onClick={props.button1}>Clcik Me</button>
            <button onMouseEnter={props.button2}>Clcik Me</button>
        </>
    )
}


export default PassEventAsProps