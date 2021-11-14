import React, { useEffect, useContext ,useState } from 'react'
import studentContext from '../Reducers/studentContext';
import { Link } from 'react-router-dom'
import { useHistory } from "react-router";
import { Avatar } from '@material-ui/core';
import Image from './NT.jpeg'
import { Typography, Button } from '@material-ui/core';

import { MenuList, MenuItem } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Collapse } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import moment from "moment";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import io from"socket.io-client";
let socket
export default function AccountPage(props) {

  const dispatch = useDispatch()
  const context = useContext(studentContext);
  useEffect(()=>{
    socket = io('localhost:5000')
    if(localStorage.getItem('token') && context?.student?.email){
    socket.emit('addUser',`${context?.student?.email}re`)}
  },[context?.student?.email])
  
  useEffect(()=>socket.on('recieve',(data)=>dispatch({type:'editNotifications',payload:data}),[]))
  // console.log(context)

  const [Note, setNote] = useState(false)
  //   const { deleteNote } = context;
  const { student, getDetailsStudent } = context;

  const {notifications} = useSelector((state)=>{
     return state})
  // console.log(async()=> await notifications.reverse())
  console.log(notifications)

  useEffect(()=>{
  if(student.Notifications && !notifications.length)
  dispatch({payload:student.Notifications,type:'getNotifications'})},[student.Notifications])
  // console.log(notifications)

  
  

  let history = useHistory()

  if (localStorage.getItem('isadmin') === "true") {
    history.push("/")
  }

  useEffect(() => {

    if (localStorage.getItem('token')) {
      getDetailsStudent();
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>

      <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)", marginBottom: "5vh" }}>
        <div className="card-body" style={{ display: "inline-flex", }}>
          <Avatar src={Image} style={{ height: "15vw", width: "15vw", marginRight: "2vw" }} />
          <div>
            <Typography variant="h4">{student.name}</Typography>

            <Typography variant="h6">{student.course_name}</Typography>
            <Typography variant="subtitle1">{student.course_year} year, Room no.{student.room_no} ,{student.hostel_name} </Typography>
            <div style={{ display: "inline-flex", margin: "2px" }}>
              <ContactPhoneIcon style={{ marginRight: "1vw" }} />
              <Typography variant="body1">{student.phone_no}</Typography>
            </div>
            <div>
              <Link to="/editprofile"
                style={{ textDecoration: "none" }}
              ><Button variant="outlined" color="primary" style={{ marginTop: "2vh" }}>Edit Profile</Button></Link>
            </div>
          </div>
        </div>

      </div>

      <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)", }}>
        <div className="card-body" style={{ display: "block" }}>
          <div className="card-header bg-transparent" style={{ borderBottom: "1px groove" }}>
            <Typography variant="h4">Facilities</Typography>
          </div>
          <MenuList>
            <MenuItem><AccountBalanceWalletIcon style={{ marginRight: "2vw" }} /><Typography variant="h6">Account</Typography></MenuItem>
            <MenuItem><PaymentIcon style={{ marginRight: "2vw" }} /><Typography variant="h6">Payment</Typography></MenuItem>
            <MenuItem><RoomServiceIcon style={{ marginRight: "2vw" }} /><Link to="/roomorder" style={{ textDecoration: "none", color: "inherit" }}><Typography variant="h6">Room Service</Typography></Link></MenuItem>
            <MenuItem><ToggleOnIcon style={{ marginRight: "2vw" }} /><Link to="/stop" style={{ textDecoration: "none", color: "inherit" }}><Typography variant="h6">Close Dining Account</Typography></Link></MenuItem>
            <MenuItem onClick={()=>setNote(!Note)}><NotificationsIcon  style={{marginRight:"2vw"}}/><Typography variant="h6">Notifications</Typography></MenuItem>
            <Collapse in={Note}>
                                    <div
                                        style={{
                                            marginLeft: "15px",
                                            backgroundColor: "rgb(255,255,255,0.5)",
                                            borderRadius: "7px"
                                        }}>
                                        {
                                            notifications?.slice(0).reverse()?.map((room) =>
                                                <div style={{ display: "block", borderBottom: "1px solid  #282828", padding: "5px" }}>
                                                    <Grid container direction="row" >
                                                    <Grid item xs={12}>
                                                      <div style={{color:"green",display:"flex",justifyContent:"flex-end"}}>
                                                            <Typography variant="body1">
                                                                {moment(room?.date).fromNow()}
                                                            </Typography>
                                                      </div>
                                                        </Grid>
                                                        <Grid item xs={12} md={8}>
                                                            <Typography variant="h6">
                                                                {room?.text}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            )
                                        }
                                    </div>
                                </Collapse>
          </MenuList>
          {/* <Stop></Stop> */}
        </div>

      </div>
    </>
  )
}
