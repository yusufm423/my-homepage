import React, {  useEffect,useContext, useState } from 'react'
import { useHistory } from "react-router";
import studentContext from '../Reducers/studentContext';

export default function Stop(props) {
    const context = useContext(studentContext);
  const { student, getDetailsStudent } = context;
    useEffect(() => {
        if(localStorage.getItem('token')){
          getDetailsStudent()
        }else{
          history.push("/login")
        }
        
        // eslint-disable-next-line
      }, [])
   
    let history = useHistory()

const [credentials, setCredentials] = useState({name:student.name, email: student.email, room_no: student.room_no, course_year:student.course_year,
    hostel_name:student.hostel_name, course_name: student.course_name, faculty_no: student.faculty_no, enrollment_no:student.enrollment_no, phone_no:student.phone_no})

const handleSubmit =async (e)=>{
    e.preventDefault()
    let {name, email, room_no, course_year, hostel_name, course_name, faculty_no, enrollment_no, phone_no} = credentials
    
    // console.log(id)
    const response = await fetch(`http://localhost:5000/api/auth/updateprofile/${student._id}`, {
        method: 'PUT', 
        headers: {
          'Content-Type': 'application/json',
          "auth-token": localStorage.getItem('token')
        },
        body: JSON.stringify({name, email, room_no, course_year, hostel_name, course_name, faculty_no, enrollment_no, phone_no}) 
      });
      // eslint-disable-next-line
      const json = await response.json()
    //   console.log(json)
    //   if(json.success){
        //save the auth token
        // localStorage.setItem('token', json.authToken)
        history.push("./account")
        // console.log("Account Created Successfully")
        // props.showAlert("Request Sent", "success")

    //   }else{
        // console.log("Invalid Credentials")
        //   props.showAlert("Invalid Credentials", "danger")
    //   }

    }
    const onChange= (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }

    return (
        <>
            <div className="row-50 d-flex justify-content-center" >
            <div className="col-md-5" style={{marginTop:30}}> <div className="mx-auto"> 
                <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <div className="card-body"><h3>Edit Profile</h3>
                        <form onSubmit={handleSubmit}>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="name" className=" col-form-label">Name</label>
                            <div >
                            <input className="form-control" type="text" name="name" id="name" value={credentials.name} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                            {/* value={`${student.name}`} */}
                        </div>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="email" className=" col-form-label">Email</label>
                            <div >
                            <input className="form-control" type="email" name="email" id="email" value={credentials.email} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        {/* value={`${student.email}`} */}
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="room_no" className=" col-form-label">Room Number</label>
                            <div >
                            <input className="form-control" type="text" name="room_no" id="room _no" value={credentials.room_no} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="enrollment_no" className=" col-form-label">Enrollment Number</label>
                            <div >
                            <input className="form-control" type="text" name="enrollment_no" id="enrollment_no" value={credentials.enrollment_no} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="faculty_no" className=" col-form-label">Faculty Number</label>
                            <div >
                            <input className="form-control" type="text" name="faculty_no" id="faculty_no" value={credentials.faculty_no} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                            {/* value={`${student.name}`} */}
                        </div>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="course_name" className=" col-form-label">Course Name</label>
                            <div >
                            <input className="form-control" type="text" name="course_name" id="course_name" value={credentials.course_name} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        {/* value={`${student.email}`} */}
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="course_year" className=" col-form-label">Course Year</label>
                            <div >
                            <input className="form-control" type="text" name="course_year" id="course_year" value={credentials.course_year} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="hostel_name" className=" col-form-label">Hostel Name</label>
                            <div >
                            <input className="form-control" type="text" name="hostel_name" id="hostel_name" value={credentials.hostel_name} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="phone_no" className=" col-form-label">Phone Number</label>
                            <div >
                            <input className="form-control" type="text" name="phone_no" id="phone_no" value={credentials.phone_no} onChange={onChange} aria-label="Disabled input example" />
                            </div>
                        </div>
                        
                        
                                <div className="mx-1 d-grid gap-2 d-md-flex justify-content-md-end"> 
                                <button type="submit" className="btn btn-warning">Confirm</button>
                                </div>
                                </form>
                            </div>
                    </div>
                </div> 
                <div style={{marginTop:50}}></div>
            </div>
            </div>    
        </>
    )
}
