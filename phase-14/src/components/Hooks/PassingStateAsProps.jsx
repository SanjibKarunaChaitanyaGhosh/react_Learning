import React, { useState } from 'react'

function FreeCourse({freeCourse}) {
    console.log(freeCourse)
}

function PaidCourse(props) {
    console.log(props.paidCourses)
}

const PassingStateAsProps = () => {
    const [freeCourse, setfreeCourse] = useState("HTML CSS JS")
    const [paidCourses, setpaidCourses] = useState("ReactJs NodeJs")
    return (
        <>
            <h3>Courses</h3>
            <FreeCourse freeCourse={freeCourse} />
            <PaidCourse paidCourses={paidCourses}/>
        </>
    )
}

export default PassingStateAsProps