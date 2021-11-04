import adminContext from "./adminContext";
import { useState } from 'react'

const StudentState = (props) => {
    const host = "http://localhost:5000";
    const adminInitial = []
    const [admin, setAdmin] = useState(adminInitial)

    //get all notes
const getDetailsAdmin= async ()=>{
 
    // api calls
    const response = await fetch(`${host}/api/auth/getadmin`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
     });
    const json = await response.json()
    //  console.log(json)
    setAdmin(json)
  
  }
    return (
        <>
            <adminContext.Provider value={{admin, getDetailsAdmin}}>
            {props.children}
            </adminContext.Provider>
        </>
    )
}

export default StudentState