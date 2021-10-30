import React from 'react'

export default function SignUp() {
    return (
        <>
            <div className="row-50 d-flex justify-content-center" >
        <div className="col-md-5" style={{marginTop:30}}> <div className="mx-auto"> 
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                    <div className="card-body"><h3>SignUp</h3>
                    <div className=" mb-3 row">
                        <label htmlFor="staticEmail" className=" col-form-label">Name</label>
                        <div className="mx-1">
                        <input type="text" className="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div className=" mb-3 row">
                        <label htmlFor="staticEmail" className=" col-form-label">Enrol. No.</label>
                        <div className="mx-1">
                        <input type="text" className="form-control" id="inputEmail" />
                        </div>
                    </div>
                    <div className=" mb-3 row">
                        <label htmlFor="staticEmail" className=" col-form-label">Email</label>
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
                        <button type="button" className="btn btn-warning">Create</button>
                        </div>
                    </div>
            </div>
        </div> 
        <div style={{marginTop:50}}></div>
       </div>
      </div>    
        </>
    )
}
