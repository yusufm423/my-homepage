import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import { getAll } from "../api";
import moment from "moment";
const Accountofstudents = () => {
  const [student,setData] = useState([])
    useEffect(async () => {
    const { data } = await getAll();
    console.log(data)
    setData(data)
  }, [localStorage.getItem("token")]);


  const renderStudent = (student, index) => {
    return (
      <tr key={index}>
        {/* <td>{index}</td> */}
        <td>{student.name}</td>
        <td>{student.course_name}</td>
        <td>{student.course_year}</td>
        <td>{student.room_no}</td>
        <td>{student.dining_status}</td>
        <td>{student.Fees?student.Fees.DaysRemain:90}</td>
      </tr>
    );
  };

  return (
    <>
      <div
        className="card mb-3"
        style={{
          borderRadius: "15px",
          backgroundColor: "rgb(255,255,255,0.5)",
        }}
      >
        <div
          className="card-header bg-transparent mx-2"
          style={{ borderBottom: "1px groove" }}
        >
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
            <tbody>{student.map(renderStudent)}</tbody>
          </ReactBootStrap.Table>
        </div>
      </div>
    </>
  );
};

export default Accountofstudents;
