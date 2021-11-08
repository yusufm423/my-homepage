import React, {useRef, useState, useContext} from 'react'
import studentContext from '../Reducers/studentContext'

export default function Feedback() {
    const context = useContext(studentContext);
      const { student } = context;
    const [msg, setmsg] = useState({name: student.name, email:student.email, room_no:student.room_no, message:""})

    const refClose = useRef(null)
    const handleSubmit = async (e)=>{
        e.preventDefault()
        let {name, email, room_no, message} = msg
        
        // console.log(id)
        const response = await fetch('http://localhost:5000/api/req/feedback', {
            method: 'POST', 
            headers: {
              'Content-Type': 'application/json',
              "auth-token": localStorage.getItem('token')
            },
            body: JSON.stringify({name, email, room_no, message}) 
          });
          // eslint-disable-next-line
          const json = await response.json()
        refClose.current.click()
        }
      const onChange= (e)=>{
        setmsg({...msg, [e.target.name]: e.target.value})
      } 
    return (
        <>
            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
            <form onSubmit={handleSubmit}>
                <div className="modal-content">
                  
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Feedback</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    
                    <div className="mb-3">
                        <label htmlFor="message" className="col-form-label">Message:</label>
                        <textarea onChange={onChange} className="form-control"name="message" id="message"></textarea>
                    </div>
                
                </div>
                <div className="modal-footer">
                    <button type="button" ref={refClose} className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" className="btn btn-warning">Send message</button>
                </div>
                </div></form>
            </div>
            </div>  
        </>
    )
}
