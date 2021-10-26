import React from 'react'
import Notices from './Notices';

import { Avatar } from '@material-ui/core';
import Image from'./NT.jpeg'
import { Typography ,Button} from '@material-ui/core';

import { MenuList,MenuItem } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';

export default function AdminPage() {
    return (
        <>
        <div className="row">
            <div className="col-3 my-3 mb-3"><Notices></Notices></div>
            <div className="col-8 my-3 mb-3">
                    <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)",marginBottom:"5vh"}}>
                            <div className="card-body" style={{display:"inline-flex",}}>
                            <Avatar src={Image} style={{height:"15vw",width:"15vw",marginRight:"2vw"}}/>
                            <div>
                                <Typography variant="h4">Administrator</Typography>
                                
                                <Typography variant="h6">Nadeem Tarin Dining Hall</Typography>
                                <Typography variant="subtitle1"> Room no.25 (Ground Floor)</Typography>
                                <div style={{display:"inline-flex",margin:"2px"}}>
                                    <ContactPhoneIcon style={{marginRight:"1vw"}}/>
                                    <Typography variant="body1">9238717816</Typography>
                                </div>
                                <div>
                                <Button variant="outlined" color="primary" style={{marginTop:"2vh"}}>Edit Profile</Button>
                                </div>
                            </div>
                            </div>
                                
                    </div>
                    
                    <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)",}}>
                            <div className="card-body" style={{display:"block"}}>
                                <div className="card-header bg-transparent" style={{borderBottom:"1px groove"}}>
                                    <Typography variant="h5">Upload Notices</Typography>
                                </div>
                                        <div className="input-group mb-3 my-3">
                                        <input type="file" className="form-control" id="inputGroupFile02"/>
                                        <label className="input-group-text" htmlFor="inputGroupFile02">Upload</label>
                                        </div>
                            </div>
                                
                    </div>
                    <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)",}}>
                            <div className="card-body" style={{display:"block"}}>
                                <div className="card-header bg-transparent" style={{borderBottom:"1px groove"}}>
                                    <Typography variant="h5">Facilities</Typography>
                                </div>
                                <MenuList>
                                        <MenuItem><AccountBalanceWalletIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Account</Typography></MenuItem>
                                        <MenuItem><PaymentIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Payment</Typography></MenuItem>
                                        <MenuItem><RoomServiceIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Room Service</Typography></MenuItem>
                                        <MenuItem><ToggleOnIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Close/Open Dining Account</Typography></MenuItem>
                                    </MenuList>

                            </div>
                                
                    </div>     
                </div>
            {/* <div className="col-2 my-3 mb-3"></div>  */}
        </div>
        </>
    )
}
