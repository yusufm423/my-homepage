import React from 'react'
import * as ReactBootStrap from "react-bootstrap";

const Accountofstudents=()=> {
    const student = [
        {name:"Mohammad Yusuf", course_yr:"3rd", course_name:"BTech Computer Engg", room_no:"115",diningstatus:"Open",remainingdays:"50"},
        {name:"Mohd Naved Khan", course_yr:"3rd", course_name:"BTech Computer Engg", room_no:"128",diningstatus:"Open",remainingdays:"20"},
        {name:"Hashir Hameed Niazi", course_yr:"3rd", course_name:"BTech Computer Engg", room_no:"34",diningstatus:"Close",remainingdays:"10"},
        {name:"ABC", course_yr:"4th", course_name:"BTech Computer Engg", room_no:"56",diningstatus:"Open",remainingdays:"18"},
        {name:"DEF", course_yr:"1st", course_name:"BTech Computer Engg", room_no:"34",diningstatus:"Close",remainingdays:"27"},
        {name:"HIJ", course_yr:"4th", course_name:"Phd Artificial Intelligence", room_no:"87",diningstatus:"Open",remainingdays:"16"},
        {name:"KLM", course_yr:"1st", course_name:"MTech Computer Engg", room_no:"23",diningstatus:"Close",remainingdays:"34"},
        {name:"NOP", course_yr:"2nd", course_name:"MTech Computer Engg", room_no:"1",diningstatus:"Open",remainingdays:"67"}

    ]

    const renderStudent = (student, index)=>{
        return(
            <tr key={index}>
                {/* <td>{index}</td> */}
                <td>{student.name}</td>
                <td>{student.course_name}</td>
                <td>{student.course_yr}</td>
                <td>{student.room_no}</td>
                <td>{student.diningstatus}</td>
                <td>{student.remainingdays}</td>
            </tr>
        )
    }

    return (
        <>
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
            <div className="card-header bg-transparent mx-2" style={{ borderBottom: "1px groove" }}>
                <h4>Account of Students</h4>
            </div>
                    <div className="card-body">
                        <ReactBootStrap.Table stripped bordered hover>
                            <thead>
                            <tr>
                                {/* <td>SNo.</td> */}
                                <td>Name</td>
                                <td>Course Name</td>
                                <td>Course yr</td>
                                <td>Room No</td>
                                <td>Dining Status</td>
                                <td>Remaining days</td>
                            </tr>
                            </thead>
                            <tbody>
                                {student.map(renderStudent)}
                            </tbody>

                        </ReactBootStrap.Table>
                    </div>
            </div>
        </>
    )
}

export default Accountofstudents
