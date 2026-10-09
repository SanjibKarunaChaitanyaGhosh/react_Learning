import { createContext,useContext } from "react";

const UserContext = createContext()

function Child1({name}) {
    console.log(name);
    
    return(
        <>
        <h1>Child1 {name}</h1>
        <Child2 name={name}/>       
        </>
    )
}
function Child2({name}) {
    console.log(name);
    return(
        <>
        <h1>Child2 {name}</h1>
        <Child3 name={name}/>       
        </>
    )
}
function Child3({name}) {
    console.log(name);
    return(
        <>
        <h1>Child3 {name}</h1>
        <Child4 name={name}/>       
        </>
    )
}
function Child4({name}) {
    console.log(name);
    return(
        <>
        <h1>Child4 {name}</h1>
        <FinalPropsNeed />     
        </>
    )
}
function FinalPropsNeed(){
    const address1 = useContext(UserContext)
    return(
        <>
         <h3>Context API</h3>
         <p>With the help of Context API we can manage the state globally...</p>
         <h2>Useful for :</h2>
         <ul>
            <li>themes</li>
            <li>Authentication</li>
            <li>user Data</li>
            <li>language setting etc...</li>
            <li>Context API is fot fetching this address - </li>
         </ul>
         <h3>{address1}</h3>
        </>
    )
}
const PropsDrilling = () => {
    const address = "Kolkata"
    const name="Sanjib"
    return (
        <>
            <div>PropsDrilling</div>
            <Child1 name={name}/>
            <h3>UseConext using Provide</h3>
            <UserContext.Provider value={address}>
                <Child1 name={name} />
            </UserContext.Provider>
            
        </>
    )
}

export default PropsDrilling