import { React, useState, useEffect, useContext } from 'react'
import adminContext from '../Reducers/adminContext';
import { useHistory } from "react-router";
import Notices from './Notices';
import Collapse from '@material-ui/core/Collapse';
import { Avatar } from '@material-ui/core';
import Image from './NT.jpeg'
import { Typography, Button, Grid } from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
// import FileBase from 'react-file-base64';
import App from './pdfviewer';
import { getreq } from '../Actions';
import { useDispatch } from 'react-redux';
import io from "socket.io-client"
import { useSelector } from "react-redux"
import moment from "moment"
// import PDFViewer from "pdf-viewer-reactjs"
// import { Document, Page } from 'react-pdf';
// import { Viewer } from '@react-pdf-viewer/core';
// import { Viewer } from '@react-pdf-viewer/core';

// import { Viewer } from "react-viewer"
// import '@react-pdf-viewer/core/lib/styles/index.css';
let socket
export default function AdminPage() {
    const [showReq, changeReq] = useState(false)
    const [showDel, changeDel] = useState(false)
    const dispatch = useDispatch()

    const { requests, Delieveries } = useSelector(state => state)

    const [reqs, setReqs] = useState(null)

    const [dels, setDels] = useState(null)

    useEffect(() => setReqs(requests), [requests])

    useEffect(() => setDels(Delieveries), [Delieveries])

    useEffect(() => {
        dispatch(getreq())
        socket = io('localhost:5000')
        if (localStorage.getItem('token')) {
            socket.emit('addUser', "admin1@gmail.com")
        }
    }, ['localhost:5000'])
    // console.log(postData.selectedFile)

    useEffect(() => socket.on('recieve', (data) => dispatch({ type: 'editReq', payload: data }), []))

    const context = useContext(adminContext);
    //   const { deleteNote } = context;
    // console.log(context)
    const { admin, getDetailsAdmin } = context;

    useEffect(() => {

        if (localStorage.getItem('token')) {
            getDetailsAdmin();
        }
        // eslint-disable-next-line
    }, [])
    const [heading, setHead] = useState("")
    // const base64WithoutPrefix = postData.selectedFile.substr('data:application/pdf;base64,'.length);

    // console.log(base64WithoutPrefix)
    //   const bytes = atob(base64WithoutPrefix);
    //   let length = bytes.length;
    //   let out = new Uint8Array(length);

    //   while (length--) {
    //       out[length] = bytes.charCodeAt(length);
    //   }

    //   const pdf = new Blob([out], { type: 'application/pdf' });

    //   const url = URL.createObjectURL(pdf);

    //   console.log(url);
    console.log(Delieveries, requests)

    return (
        <>
            <div className="row">
                <div className="col-3 my-3 mb-3 Homemid2"><Notices></Notices></div>
                <div className="col-8 my-3 mb-3">
                    <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)", marginBottom: "5vh" }}>
                        <div className="card-body" style={{ display: "inline-flex", }}>
                            <Avatar src={Image} style={{ height: "15vw", width: "15vw", marginRight: "2vw" }} />
                            <div>
                                <Typography variant="h4">{admin.name}</Typography>
                                <Typography variant="h6">{admin.position}</Typography>
                                <Typography variant="subtitle1"> Room number {admin.room_no}</Typography>
                                <div style={{ display: "inline-flex", margin: "2px" }}>
                                    <ContactPhoneIcon style={{ marginRight: "1vw" }} />
                                    <Typography variant="body1">{admin.phone_no}</Typography>
                                </div>
                                <div>
                                    <Button variant="outlined" color="primary" style={{ marginTop: "2vh" }}>Edit Profile</Button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)", }}>
                        <div className="card-body" style={{ display: "block" }}>
                            <div className="card-header bg-transparent" style={{ borderBottom: "1px groove" }}>
                                <Typography variant="h5">Upload Notices</Typography>
                            </div>
                            <div style={{ margin: "10px", marginLeft: "0px" }}>
                                <TextField variant="filled"
                                    multiline maxRows={4}
                                    placeholder="Notice Heading"
                                    label="Notice Heading"
                                    value={heading}
                                    onChange={(e) => setHead(e.target.value)}
                                    style={{ width: "100%" }} />
                            </div>
                            {/* <div className="input-group mb-3 my-3">
                                <FileBase type="file" multiple={false}
                                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                                <Button variant="outlined" color="primary" style={{ borderRadius: "5px" }}>Upload</Button>
                            </div> */}
                            <App props={heading} />
                        </div>

                    </div>
                    <div>

                        {/* <Viewer fileUrl={url} /> */}
                        {/* <PDFViewer
                            document={{
                                url: 'https://arxiv.org/pdf/quant-ph/0410100.pdf',
                            }}
                        /> */}

                    </div>
                    <div className="card mb-3"
                        style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)", }}>
                        <div className="card-body"
                            style={{ display: "block" }}>
                            <div className="card-header bg-transparent" style={{ borderBottom: "1px groove" }}>
                                <Typography variant="h5">Facilities</Typography>
                            </div>
                            <MenuList>
                                <MenuItem>
                                    <AccountBalanceWalletIcon style={{ marginRight: "2vw" }} />
                                    <Typography variant="h6">Accounts of Students</Typography>
                                </MenuItem>
                                <MenuItem onClick={() => changeDel(!showDel)}>
                                    <ToggleOnIcon style={{ marginRight: "2vw" }} />
                                    <Typography variant="h6">Requests</Typography>
                                </MenuItem>
                                <Collapse in={showDel}>
                                    <div
                                        style={{
                                            marginLeft: "15px",
                                            backgroundColor: "rgb(255,255,255,0.5)",
                                            borderRadius: "7px",
                                            padding: "10px"
                                        }}>
                                        <Typography variant="h6">Room Orders</Typography>
                                        {
                                            reqs?.slice(0).reverse().map((room) =>
                                                <div style={{ display: "block", borderBottom: "1px solid #282828", padding: "10px" }}>
                                                    <Grid container direction="row" >
                                                        <Grid item xs={12}>
                                                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                                                <Typography style={{ color: "green" }}>{room.meal}</Typography>
                                                            </div>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                                                <Typography style={{ color: "green" }}>{moment(room.date).fromNow()}</Typography>
                                                            </div>
                                                        </Grid>

                                                        <Grid item xs={12} md={8}>
                                                            <Typography variant="body1">
                                                                Deliever food at room {room.room_no} in name of {room.name}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={12} md={8}>
                                                            Reason:{room.reason}

                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <Button variant="outlined" color="primary"
                                                                onClick={() => {
                                                                    setReqs(reqs.filter((req) => req._id !== room._id))
                                                                    setDels([...dels, {
                                                                        room_no: room.room_no,
                                                                        meal: room.meal,
                                                                        email:room.email,
                                                                        id:room._id
                                                                    }])
                                                                    socket.emit('sendMessage',
                                                                        {
                                                                            room_no: room.room_no,
                                                                            user: room.email,
                                                                            Accepted: true,
                                                                            sender: "admin1@gmail.com",
                                                                            meal: room.meal,
                                                                            id: room._id
                                                                        })
                                                                }}
                                                            >
                                                                Accept
                                                            </Button>
                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <Button variant="outlined" color="secondary"
                                                                onClick={() => socket.emit('sendMessage',
                                                                    { room_no: room.room_no,
                                                                     user: room.email,
                                                                    Accepted: false, 
                                                                    sender: "admin1@gmail.com", 
                                                                    meal: room.meal, 
                                                                    id: room._id })}
                                                            >
                                                                Deny
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div
                                        style={{
                                            marginLeft: "15px",
                                            backgroundColor: "rgb(255,255,255,0.5)",
                                            borderRadius: "7px", padding: "10px"
                                        }}>
                                        <Typography variant="h6">Close Dining Requests</Typography>
                                    </div>
                                </Collapse>
                                <MenuItem onClick={() => changeReq(!showReq)}>
                                    <RoomServiceIcon style={{ marginRight: "2vw" }} />
                                    <Typography variant="h6">Delieveries</Typography>
                                </MenuItem>
                                <Collapse in={showReq}>
                                    <div
                                        style={{
                                            marginLeft: "15px",
                                            backgroundColor: "rgb(255,255,255,0.5)",
                                            borderRadius: "7px"
                                        }}>
                                        <Typography>{!dels?.length?"No Delievery":""}</Typography>
                                        {
                                            dels?.slice(0)?.reverse()?.map((room) =>
                                                <div style={{ display: "block", borderBottom: "1px solid #282828", padding: "10px" }}>
                                                    <Grid container direction="row" >
                                                    <Grid item xs={12}>
                                                        <div style={{display:"flex",justifyContent:"flex-end"}}>
                                                            <Typography variant="body1" style={{color:"green"}}>
                                                            {moment(room.date).fromNow()}
                                                            </Typography>
                                                        </div>
                                                        </Grid>
                                                        <Grid item xs={6} md={10}>
                                                            <Typography variant="body1">
                                                                Deliever {room.meal} at room {room.room_no}
                                                            </Typography>
                                                        </Grid>
                                                        <Grid item xs={6} md={2}>
                                                            <Button variant="outlined" color="primary"
                                                            onClick={()=>
                                                            {
                                                                socket.emit('sendMessage',
                                                            {
                                                                room_no: room.room_no,
                                                                user: room.email,
                                                                delievered: true,
                                                                sender: "admin1@gmail.com",
                                                                meal: room.meal,
                                                                id: room.id
                                                            })
                                                            setDels(dels.filter((req) => req.id !== room.id))
                                                            }
                                                        }
                                                            
                                                            >
                                                                Delievered
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                </div>
                                            )
                                        }
                                    </div>
                                </Collapse>
                            </MenuList>

                        </div>

                    </div>
                </div>
                <div className="col-3 my-3 mb-3 Homemid1"><Notices></Notices></div>
                {/* <div className="col-2 my-3 mb-3"></div>  */}
            </div>
        </>
    )
}
