import{ React , useState,useEffect, useContext}from 'react'
import adminContext from '../Reducers/adminContext';
import { useHistory } from "react-router";
import Notices from './Notices';
import Collapse from '@material-ui/core/Collapse';
import { Avatar } from '@material-ui/core';
import Image from './NT.jpeg'
import { Typography, Button ,Grid} from '@material-ui/core';
import { TextField } from '@material-ui/core';
import { MenuList, MenuItem } from '@material-ui/core';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
export default function AdminPage() {
    const [showReq,changeReq] = useState(false)
    const [showDel,changeDel] = useState(false)
    let history = useHistory()
    
    if(localStorage.getItem('isadmin')==="false"){
        history.push('/')
    }

    const context = useContext(adminContext);
//   const { deleteNote } = context;
  const { admin, getDetailsAdmin } = context;

    useEffect(() => {
               
        if(localStorage.getItem('token')){
          getDetailsAdmin();
        }else{
          history.push("/login")
        }
         // eslint-disable-next-line
}, [])


    return (
        <>
            <div className="row">
                <div className="col-3 my-3 mb-3"><Notices></Notices></div>
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
                                    style={{ width: "100%" }} />
                            </div>
                            <div className="input-group mb-3 my-3">
                                <input type="file" className="form-control" id="inputGroupFile02" />
                                <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                            </div>
                        </div>

                    </div>
                    <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)", }}>
                        <div className="card-body" style={{ display: "block" }}>
                            <div className="card-header bg-transparent" style={{ borderBottom: "1px groove" }}>
                                <Typography variant="h5">Facilities</Typography>
                            </div>
                            <MenuList>
                                <MenuItem>
                                <AccountBalanceWalletIcon style={{ marginRight: "2vw" }} />
                                <Typography variant="h6">Accounts of Students</Typography>
                                </MenuItem>
                                <MenuItem onClick={()=>changeDel(!showDel)}>
                                <ToggleOnIcon style={{ marginRight: "2vw" }} />
                                <Typography variant="h6">Requests</Typography>
                                </MenuItem>
                                <Collapse in={showDel}>
                                    <div
                                    style={{marginLeft:"15px",
                                    backgroundColor:"rgb(255,255,255,0.5)",
                                    borderRadius:"7px"}}>
                                    {
                                        [112,123,143].map((room)=>
                                        <div style={{display:"block",borderBottom:"1px solid white",padding:"5px"}}>
                                            <Grid container direction="row" >
                                            <Grid item xs={12} md={8}>
                                            <Typography variant="body1">
                                            Deliever food at room {room}
                                            </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={2}>
                                            <Button variant="outlined" color="primary">
                                            Accept
                                            </Button>
                                            </Grid>
                                            <Grid item xs={6} md={2}>
                                            <Button variant="outlined" color="secondary">
                                            Deny
                                            </Button>
                                            </Grid>
                                            </Grid>
                                        </div>
                                        )
                                    }
                                    </div>
                                </Collapse>
                                <MenuItem onClick={()=>changeReq(!showReq)}>
                                <RoomServiceIcon style={{ marginRight: "2vw" }} />
                                <Typography variant="h6">Delieveries</Typography>
                                </MenuItem>
                                <Collapse in={showReq}>
                                    <div
                                    style={{marginLeft:"15px",
                                    backgroundColor:"rgb(255,255,255,0.5)",
                                    borderRadius:"7px"}}>
                                    {
                                        [112,123,143].map((room)=>
                                        <div style={{display:"block",borderBottom:"1px solid white",padding:"5px"}}>
                                            <Grid container direction="row" >
                                            <Grid item xs={12} md={8}>
                                            <Typography variant="body1">
                                            Deliever food at room {room}
                                            </Typography>
                                            </Grid>
                                            <Grid item xs={6} md={2}>
                                            <Button variant="outlined" color="primary">
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
                {/* <div className="col-2 my-3 mb-3"></div>  */}
            </div>
        </>
    )
}
