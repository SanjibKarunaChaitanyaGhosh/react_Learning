import React, { useState } from 'react'

function Child1({course}) {
    return (
        <>
            <h3>Child1</h3>
            <h1>{course}</h1>
        </>
    )
}
function Child2({course}) {
    return (
        <>
            <h3>Child2</h3>
            <h1>{course}</h1>
        </>
    )
}


const LiftingStateUp = () => {

    const [course, setcourse] = useState("MernStackDevelopment")
    return (
        <div>
            <h3>LiftingStateUp</h3>
            <Child1 course={course} />
            <Child2 course={course} />
        </div>
    )
}

export default LiftingStateUp