import studentContext from "./studentContext";
import { useState } from 'react'

const StudentState = (props) => {
    const host = "http://localhost:5000";
    const studentInitial = []
    const [student, setStudent] = useState(studentInitial)

    //get all notes
const getDetailsStudent= async ()=>{
 
    // api calls
    const response = await fetch(`${host}/api/auth/getstudent`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
     });
    const json = await response.json()
    //  console.log(json)
    setStudent(json)
  
  }

   
    return (
        <>
            <studentContext.Provider value={{student, getDetailsStudent}}>
            {props.children}
            </studentContext.Provider>
        </>
    )
}

export default StudentState
