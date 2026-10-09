function FreeCourse(props) {
  console.log(props)
  return (
    <>
      <h3>FreeCourse</h3>
      {
        props.courses.map((course,idx) => {
          return <div key={idx}>
            <div>{course.id}</div>
            <div>{course.name}</div>
            <div>{course.title}</div>
          </div>
        })
      }
    </>
  )
}

function PaidCourse({courses}) {
  console.log("This is using Destructring method",courses)
  return (
    <>
      <h3>PaidCourse</h3>
      {
        courses.map((course,idx) => {
          return <div key={idx}>
            <div>{course.id}</div>
            <div>{course.name}</div>
            <div>{course.title}</div>
          </div>
        })
      }
    </>
  )
}

const FunctionalComponents = () => {
  const course = "MCA"
  const freeCourse = [
    {
      id: 1,
      title: "HTML CSS",
      name: "Sanjib"
    },
    {
      id: 2,
      title: "JAVA-Script",
      name: "Sanjib Ghosh"
    }
  ]

  const paidCourse = [
    {
      id: 1,
      title: "ReactJS",
      name: "Sanjib"
    },
    {
      id: 2,
      title: "Express",
      name: "Sanjib Ghosh"
    }
  ]

  return (
    <>
      <h3>Functional Compnents</h3>
      <FreeCourse courses={freeCourse} />
      <div>number is  {course}</div>
      <PaidCourse courses={paidCourse} />
    </>
  )
}


export default FunctionalComponents