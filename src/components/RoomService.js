import React from 'react'

export default function RoomService() {
    return (
        <>
            <div className="row-50 d-flex justify-content-center" >
            <div className="col-md-5" style={{marginTop:30}}> <div className="mx-auto"> 
                <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <div className="card-body"><h3>Room Service</h3>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="staticEmail" className=" col-form-label">Name</label>
                            <div >
                            <input type="text" className="form-control" id="inputEmail" />
                            </div>
                        </div>
                        <div className="mx-1 mb-3 row">
                            <label htmlFor="staticEmail" className=" col-form-label">Enrol. No.</label>
                            <div >
                            <input type="text" className="form-control" id="inputEmail" />
                            </div>
                        </div>
                        <div className=" mx-1 mb-3 row">
                            <label htmlFor="staticEmail" className=" col-form-label">Room Number</label>
                            <div >
                            <input type="text" className="form-control" id="inputEmail" />
                            </div>
                        </div>

                        <div className="mx-3">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="message-text" className="col-form-label">Reason</label>
                            <textarea className="form-control" id="message-text"></textarea>
                        </div>
                        </form>
                    </div>
                    <div className="mb-3 row form-floating mx-3 my-3">
                        <select className="form-select my-2" id="floatingSelectGrid" aria-label="Floating label select example">
                            <option value="1">Breakfast</option>
                            <option value="2">Lunch</option>
                            <option value="3">Dinner</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Meal</label>
                        </div> 
                                <div className="mx-1 d-grid gap-2 d-md-flex justify-content-md-end"> 
                                <button type="button" className="btn btn-warning">Request</button>
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
