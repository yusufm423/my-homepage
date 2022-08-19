import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function LogIn(props) {
    const [credentials, setCredentials] = useState({email:"", password:"",access:""})
    let history = useHistory()

    const handleSubmit =async (e)=>{
        e.preventDefault()
        let user = ""
        if(credentials.access==="1"){
             user = "student"
        }else{
             user = "admin"
        }
        const response = await fetch(`https://dininghall.herokuapp.com/api/auth/login${user}`, {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({email: credentials.email,password: credentials.password}) 
          });
        //   console.log(user)
          const json = await response.json()
          console.log(json)
          if(json.success){
            //save the auth token
            localStorage.setItem('token', json.authToken)
            if(user === "student"){
                localStorage.setItem('isadmin', false)
                history.push('./account')
            }else if(user === "admin"){
                localStorage.setItem('isadmin', true)
                history.push('./admin')

            }
            props.showAlert("Logged In Successfully", "success")
            // console.log("Logged In Successfully")

          }else{
            props.showAlert("Invalid Credentials", "danger")
            // console.log("Invalid Creds")
        }


        }
        const onChange= (e)=>{
            setCredentials({...credentials, [e.target.name]: e.target.value})
          } 
    return (
        <>
        <div className="row-50 d-flex justify-content-center" >
        <div className="col-md-5"style={{marginTop:75}}> <div className="mx-auto"> 
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                    <div className="card-body" >
                        <h3>Login</h3>
                        <form onSubmit={handleSubmit}>
                    <div className=" mb-3 row">
                        <label htmlFor="email" className=" col-form-label mx-1">Email</label>
                        <div className="mx-1" >
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} name="email" id="email" style={{width:"98%"}}/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className=" col-form-label mx-1">Password</label>
                        <div className="mx-1">
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" style={{width:"98%"}}/>
                        </div>
                    </div>  
                    <div className="mb-3 row form-floating mx-1">
                    <select className="form-select my-2" id="access" value={credentials.access} onChange={onChange} name="access" aria-label="Floating label select example">
                        <option value="0">Select Access type</option>
                        <option value="1">Student</option>
                        <option value="2">Admin</option>
                    </select>
                    <label htmlFor="floatingSelectGrid">Access as</label>
                    </div>       
                        <div className="my-2 d-grid gap-2 d-md-flex justify-content-md-end"> 
                        {/* <Link className="my-2 mx-3" to="/admin">Temp Link for Admin</Link>   */}
                        <Link className="my-2 mx-3" to="#!">Forgot Password?</Link>     
                        <button type="submit" className="btn btn-warning">LogIn</button>
                        <Link to='/signup'><button type="button" className="btn btn-warning">SignUp</button></Link>
                        </div>
                        </form>
                    </div>
                   
            </div>
        </div> 
        <div style={{marginTop:78}}></div>
       </div>
      </div>
        </>
    )
}
