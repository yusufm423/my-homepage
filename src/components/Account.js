import React, { useEffect, useContext } from 'react'
import studentContext from '../Reducers/studentContext';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";
import { Avatar } from '@material-ui/core';
import Image from'./NT.jpeg'
import { Typography ,Button} from '@material-ui/core';

import { MenuList,MenuItem } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

export default function AccountPage(props) {

  const context = useContext(studentContext);
//   const { deleteNote } = context;
  const { student, getDetailsStudent } = context;

    let history = useHistory()
    
         if(localStorage.getItem('isadmin')==="true"){
           history.push("/")
         }

    useEffect(() => {
         
        if(localStorage.getItem('token') ){
          getDetailsStudent();
        }
         // eslint-disable-next-line
}, [])

    return (
        <>
           
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)",marginBottom:"5vh"}}>
                    <div className="card-body" style={{display:"inline-flex",}}>
                      <Avatar src={Image} style={{height:"15vw",width:"15vw",marginRight:"2vw"}}/>
                      <div>
                        <Typography variant="h4">{student.name}</Typography>
                        
                        <Typography variant="h6">{student.course_name}</Typography>
                        <Typography variant="subtitle1">{student.course_year} year, Room no.{student.room_no} ,{student.hostel_name} </Typography>
                        <div style={{display:"inline-flex",margin:"2px"}}>
                            <ContactPhoneIcon style={{marginRight:"1vw"}}/>
                            <Typography variant="body1">{student.phone_no}</Typography>
                        </div>
                        <div>
                        <Link to="/editprofile"><Button variant="outlined" color="primary" style={{marginTop:"2vh"}}>Edit Profile</Button></Link>
                        </div>
                      </div>
                      </div>
                        
            </div>
            
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)",}}>
                    <div className="card-body" style={{display:"block"}}>
                        <div className="card-header bg-transparent" style={{borderBottom:"1px groove"}}>
                            <Typography variant="h4">Facilities</Typography>
                        </div>
                        <MenuList>
                                <MenuItem><AccountBalanceWalletIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Account</Typography></MenuItem>
                                <MenuItem><PaymentIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Payment</Typography></MenuItem>
                                <MenuItem><RoomServiceIcon style={{marginRight:"2vw"}}/><Typography variant="h6"><Link to="/roomorder" style={{textDecoration:"none",color:"black"}}>Room Service</Link></Typography></MenuItem>
                                <MenuItem><ToggleOnIcon style={{marginRight:"2vw"}}/><Typography variant="h6"><Link to="/stop" style={{textDecoration:"none",color:"black"}}>Close Dining Account</Link></Typography></MenuItem>
                            </MenuList>
                            {/* <Stop></Stop> */}
                    </div>
                        
            </div>
        </>
    )
}
