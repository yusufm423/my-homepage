import React from 'react'
import { Link } from 'react-router-dom'

export default function LogIn() {
    return (
        <>
        <div className="row-50 d-flex justify-content-center" >
        <div className="col-md-5"style={{marginTop:75}}> <div className="mx-auto"> 
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                    <div className="card-body">
                    <div className=" mb-3 row">
                        <label htmlFor="staticEmail" className=" col-form-label">Enrol. No.</label>
                        <div className="mx-1">
                        <input type="text" className="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className=" col-form-label">Password</label>
                        <div className="mx-1">
                        <input type="password" className="form-control" id="inputPassword"/>
                        </div>
                    </div>         
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end"> 
                        <Link className="my-2 mx-3" to="#!">Forgot Password?</Link>     
                        <Link to='#!'><button type="button" className="btn btn-warning">LogIn</button> </Link>
                        <Link to='/signup'><button type="button" className="btn btn-warning">SignUp</button></Link>
                        </div>
                    </div>
            </div>
        </div> 
        <div style={{marginTop:78}}></div>
       </div>
      </div>
        </>
    )
}
