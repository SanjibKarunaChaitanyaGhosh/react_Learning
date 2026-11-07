import { useState } from "react";

const Understanding_Edit_in_React = () => {

    const [students, setStudents] = useState([])

    const [name, setName] = useState({
        id: "",
        name:""
    })

    const addStudent = () => {
        setStudents(name)
    }

    const handleChange = (e) => {

        e.preventDefault()

        const { name, value } = e.target

        setName({
            ...name,
            [name]: value
        })
    }
console.log(students)

  return (
      <div className="grid grid-cols-1 gap-3">
          <input
              name="id"
              type="text"
              value={name.id}
              onChange={handleChange}
              placeholder="student id"
              className="bg-amber-200 p-3 w-100 h-20 rounded"
              
          />
          <input
              name="name"
              type="text"
              value={name.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className="bg-amber-200 p-3 w-100 h-20 rounded"
          />
          <button
              onClick={addStudent}
              className="bg-amber-200 p-3 w-100 h-20 rounded"
          >Add Students</button>
    </div>
  )
}

export default Understanding_Edit_in_React