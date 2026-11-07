// Features we'll implement step by step:
// Lesson	Feature

import { useState } from "react";

// 1	Create student object state         ==> done.

// 2	Add students                        ==> done.

// 3	Display students using map()        ==> done.

// 4	Delete students using filter()
// 5	Edit student information
// 6	Search students
// 7	Complete CRUD application


const Student_Management_System = () => {

    const [students] = useState([
        {
            id: 1,
            name: "Rahul",
            email: "rahul@gmail.com",
            age: 22,
            course: "MCA"
        },
        {
            id: 2,
            name: "Amit",
            email: "amit@gmail.com",
            age: 23,
            course: "BCA"
        }
    ]);

  return (
      <div className="flex flex-1 flex-col justify-center items-center w-full">
          <div className="grid grid-cols-3 gap-3 px-10 py-5">
              {
                  students.map((val, idx) => (
                      <div key="idx"
                          className="p-3 bg-amber-950 text-2xl text-amber-50 rounded"
                      >
                          <div>{val.name}</div>
                          <div>{val.email}</div>
                          <div>{val.course}</div>
                      </div>
                  ))
              }
          </div>

          <StdMngSystem /> 

      </div>
  )
}

export default Student_Management_System


{/* student management system */ }
const StdMngSystem = () => {

    const [studentinfo, setStudentInfo] = useState([])

    const [formData, setFormData] = useState({
        id:" ",
        name: "",
        email: "",
        course: ""
    })


    const handleChange = (e) =>{

        const { name, value } = e.target;
        
        setFormData({
            ...formData,
            [name]: value
        })

    }

    const formSubmit = (e) => {
        e.preventDefault()

        console.log("student has been added :", formData)
        alert("Student has been added")

        setStudentInfo([...studentinfo, formData])

    }

    const deleteStudent = (id) => {

        const updatedStudents = studentinfo.filter(
            studentinfo => studentinfo.id !== id
        );

        setStudentInfo(updatedStudents);

    };
    
    const editStudent = (id) => {
        const editStudent = studentinfo.filter(
            studentinfo => studentinfo.id == id
            
        )
    }

    console.log(studentinfo);

    return (   
        <div
              className = "shadow border border-2xl bg-amber-100 rounded p-10 grid grid-cols-1 gap-5 w-200"
        >
              <h1 className="text-4xl">Studetnt Management System</h1>
              <h3 className="text-2xl">Add New Student</h3>
              <form
                  action=""
                  className="grid grid-col-1 gap-2"
                  onSubmit={formSubmit}
            >
                <input
                    name="id"
                    type="text"
                    placeholder="Student id"
                    className="inptBox"
                    onChange={handleChange}
                    value={formData.id}
                />
                  <input
                      name="name"
                      type="text"
                      placeholder="Student name"
                      className="inptBox"
                    onChange={handleChange}
                    value={formData.name}
                  />

                  <input
                      name="email"
                      type="email"
                      placeholder="Student email id"
                      className="inptBox"
                    onChange={handleChange}
                    value={formData.email}
                  />

                    {/* Courses */}
                  <select
                      name="course"
                      className="inptBox"
                    onChange={handleChange}
                    value={formData.course}
                  >
                    <option value="MCA">MCA</option>
                    <option value="B.Tech">B.Tech</option>
                    <option value="BCA">BCA</option>
                    <option value="BCA-AI/ML">BCA-AI/ML</option>
                  </select>

                    {/* add Students */}
                  <button
                      className="inptBox"
                      type="submit"
                  >Add Students
                  </button>

            </form>
            <div>
                {
                    studentinfo.length
                }
                {
                    studentinfo.map((student) => {
                        return <div key={student.id} className="grid grid-cols-2 gap-5 w-full bg-amber-500 p-3 m-3">
                            <div>{student.name}</div>
                            <div>{student.email }</div>
                            <div>{student.course}</div>

                            {/* delete button */}
                            <div onClick={() => { deleteStudent(student.id) }}>Delete</div>
                            
                            {/* update button */}
                            <div onClick={() => { editStudent(student.id) }}>Edit info</div>
                        </div>
                    })
                }
            </div>

            
          </div >
    )
}