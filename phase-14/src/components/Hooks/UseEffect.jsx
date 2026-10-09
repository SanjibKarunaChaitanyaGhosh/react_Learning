import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [post, setpost] = useState([])
    
    useEffect(
        () => {
            const getPost = async () => {
                try {
                    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                    const data = await res.json()
                    setpost(data)

                } catch (error) {
                    console.log("Error ",error);

                } 
        }
        getPost()
    }, [])

    return (
        <>
            <h3>UseEffect</h3>
            {/* <button onClick={getPost}>get Data</button> */}
            {
                post.map((val, idx) => {
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

export default UseEffect