import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function SignUp(props) {
    const [credentials, setCredentials] = useState({name:"", enrollment_no:"", faculty_no:"", email:"", password:""})
    let history = useHistory()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        const {name, enrollment_no, faculty_no, email, password} = credentials
        const response = await fetch("https://dininghall.herokuapp.com/api/auth/signupstudent", {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, enrollment_no, faculty_no, email, password}) 
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            //save the auth token
            localStorage.setItem('token', json.authToken)
            history.push("./")
            // console.log("Account Created Successfully")
            props.showAlert("Account Created Successfully", "success")

          }else{
            // console.log("Invalid Credentials")
              props.showAlert("Invalid Credentials", "danger")
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
                    <div className="card-body">
                        <h3>SignUp</h3>
                        <form onSubmit={handleSubmit}>
                    <div className=" mb-3 row">
                        <label htmlFor="name" className=" col-form-label">Name</label>
                        <div className="mx-1">
                        <input type="text" className="form-control" name="name" id="name" onChange={onChange} />
                        </div>
                    </div>
                    <div className=" mb-3 row">
                        <label htmlFor="enrollment_no" className=" col-form-label">Enrol. No.</label>
                        <div className="mx-1">
                        <input type="text" className="form-control" name="enrollment_no" id="enrollment_no" onChange={onChange} />
                        </div>
                    </div>
                    <div className=" mb-3 row">
                        <label htmlFor="faculty_no" className=" col-form-label">Faculty No.</label>
                        <div className="mx-1">
                        <input type="text" className="form-control" name="faculty_no" id="faculty_no" onChange={onChange} />
                        </div>
                    </div>
                    <div className=" mb-3 row">
                        <label htmlFor="email" className=" col-form-label">Email</label>
                        <div className="mx-1">
                        <input type="email" className="form-control" name="email" id="email" onChange={onChange} />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className=" col-form-label">Password</label>
                        <div className="mx-1">
                        <input type="password" className="form-control" name="password" id="password" onChange={onChange}/>
                        </div>
                    </div>        
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
                        <button type="submit" className="btn btn-warning">Create</button>
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
