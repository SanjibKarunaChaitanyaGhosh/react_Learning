import { useState } from "react";

const JsonPlaceHolder = () => {
    const [post, setpost] = useState([])

    // console.log(post);
    
    console.log("Sanjib")

    const getPost =async ()=>{

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data =await response.json()
            setpost(data)

        } catch (error) {
            console.log("Error :",error)
        }
    }

  return (
    
    <>
        <div>jsonplaceholder</div>
        <button onClick={getPost}> Get Post </button>
        {
            post.map((val,idx)=>{
                return (
                    <div key={idx}>
                        <h3>{val.title}</h3>
                        <p>{val.body}</p>
                    </div>
                )
                
                
            })
        }
    </>

  )
}

export default JsonPlaceHolder