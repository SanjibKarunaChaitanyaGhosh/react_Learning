import { useState } from "react"

const State = () => {
    const [first, setfirst] = useState(0)

    const Decrement = () => {
        setfirst(first - 1)
    }
    const IncrementFun = () => {
        setfirst(first + 1)
    }

    const Reset=()=>{
        setfirst(0)
    }

    const users = [
        {id:1, name:"Debayan", age:21},
        {id:2, name:"Beauty", age:20},
        {id:3, name:"Shilpi", age:23},
        {id:1, name:"Monami", age:19},
        {id:1, name:"Gargi", age:75},
    ]

    return (
        <>
        <div className="flex justify-around mt-10">
            <div className="px-3 py-2 rounded bg-amber-900 text-4xl text-white ">State</div>
            <section onClick={Decrement} className="px-3 py-2 rounded bg-amber-900 text-4xl text-white">Decrement</section>
            <h1 className="px-3 py-2 rounded bg-amber-900 text-4xl text-white">{first}</h1>
            <section onClick={IncrementFun} className="px-3 py-2 rounded bg-amber-900 text-4xl text-white">Increament</section>
            <h3 className="text-center px-3 py-2 rounded bg-amber-900 text-4xl text-white mt-10 w-50"
                onClick={Reset}>Reset</h3>
        </div>
        <UserCard users ={users}/>
        
        
        </>
    )
}

const UserCard = ({users})=>{

    console.log(users)

    
    return(
        <div>
            <h3 className="text-center pt-5 bg-amber-200 py-5">NEW TASK</h3>
            <div className="grid grid-cols-3 gap-5">
                   {users.map((val)=>{
                        return (
                            <div className=" bg-amber-800 text-2xl text-white px-3 py-2 rounded">
                                <h3>name:{val.name} age:{val.age} totalCount:{users.length}</h3>
                            </div>
                        )
                   })}  
            </div>
        </div>
    )
}

export default State