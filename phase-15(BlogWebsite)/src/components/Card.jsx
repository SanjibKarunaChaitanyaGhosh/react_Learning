
import React, { useEffect, useState } from 'react'

const Card = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts'
            )

            const result = await response.json()
            setData(result)
        }

        fetchData()
    }, [])

    console.log(data);


    return (
        <>
        <h1 className='p-5 text-center text-2xl'>Latest Blogs...</h1>
        <section className='flex flex-wrap justify-center'>
            
            {data ? (
                        data.map((val) => (
                            <div key={val.id}
                            className='bg-amber-500 felx w-100 gap-5 m-2 p-5'>
                                <h2 className='text-2xl'>{val.title}</h2>
                                <p>{val.body}</p>
                                <button className='bg-blue-900 text-white rounded m-3 px-3 py-2'>Read More</button>
                            </div>
                        ))

            ) : (
                <p>Loading...</p>
            )}
        </section>
        </>
    )
}

export default Card
