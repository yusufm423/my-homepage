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

const [credentials, setCredentials] = useState({name:student.name, email: student.email, room_no: student.room_no, reason:""})

const handleSubmit =async (e)=>{
    e.preventDefault()
    let {name, email, room_no, reason} = credentials
    
    console.log(credentials, student.name)
    const response = await fetch("http://localhost:5000/api/req/reqclose", {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, room_no, reason}) 
      });
      const json = await response.json()
      console.log(json)
      if(json.success){
        //save the auth token
        // localStorage.setItem('token', json.authToken)
        history.push("./account")
        // console.log("Account Created Successfully")
        // props.showAlert("Request Sent", "success")

      }else{
        // console.log("Invalid Credentials")
        //   props.showAlert("Invalid Credentials", "danger")
      }


    }
    const onChange= (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
      }

    return (
        <>
            <div className="row-50 d-flex justify-content-center" >
            <div className="col-md-5" style={{marginTop:30}}> <div className="mx-auto"> 
                <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <div className="card-body"><h3>Request for Stopping Dining Services</h3>
                        <form onSubmit={handleSubmit}>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="name" className=" col-form-label">Name</label>
                            <div >
                            <input className="form-control" type="text" name="name" id="name" value={credentials.name} onChange={onChange} aria-label="Disabled input example" disabled readOnly/>
                            </div>
                            {/* value={`${student.name}`} */}
                        </div>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="email" className=" col-form-label">Email</label>
                            <div >
                            <input className="form-control" type="email" name="email" id="email" value={credentials.email} onChange={onChange} aria-label="Disabled input example" disabled readOnly/>
                            </div>
                        </div>
                        {/* value={`${student.email}`} */}
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="room_no" className=" col-form-label">Room Number</label>
                            <div >
                            <input className="form-control" type="text" name="room_no" id="room _no" value={credentials.room_no} onChange={onChange} aria-label="Disabled input example" disabled readOnly/>
                            </div>
                        </div>
                        {/* value={`${student.room_no}`} */}
                       
                        
                        <div className="mx-3 mb-3">
                            <label htmlFor="reason" className="col-form-label">Reason</label>
                            <textarea className="form-control" id="reason" name="reason" value={credentials.reason} onChange={onChange}></textarea>
                        </div>
                        
                    
                    <div className="mx-3 mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="check1" required/>
                        <label className="form-check-label" htmlFor="check1">Minimum of 3 days</label>
                    </div>
                                <div className="mx-1 d-grid gap-2 d-md-flex justify-content-md-end"> 
                                <button type="submit" className="btn btn-warning">Request</button>
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
