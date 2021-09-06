import React from 'react'
import Menu from './Menu'
import Notices from './Notices'

export default function TimeTable() {
    return (
        <>
            <div className="row">
            <div className="col-3 my-3 mb-3"><Notices/></div>
            <div className="col-7 my-3 mb-3"> 
                <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <div className="card-body">
                        <div className="card-header bg-transparent"><h5>Time Table</h5></div>
                            <div className="list-group mb-3">
                                    <h6 className="my-2">Monday</h6>
                                        <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                        <h6 className="my-2">Tuesday</h6>
                                    <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                    <h6 className="my-2">Wednesday</h6>
                                    <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                    <h6 className="my-2">Thursday</h6>
                                    <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                    <h6 className="my-2">Friday</h6>
                                    <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                    <h6 className="my-2">Saturday</h6>
                                    <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                    <h6 className="my-2">Sunday</h6>
                                    <p className="mx-4">
                                            <li>Breakfast</li>
                                            <li>Lunch</li>
                                            <li>Dinner</li>
                                        </p>
                                
                            </div>
                        </div>
                </div>
            
            </div>
            <div className="col-2 my-3 mb-3"><Menu/></div> 
          </div>  
        </>
    )
}
