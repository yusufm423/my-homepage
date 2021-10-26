import React from 'react'


import { Avatar } from '@material-ui/core';
import Image from'./NT.jpeg'
import { Typography ,Button} from '@material-ui/core';

import { MenuList,MenuItem } from '@material-ui/core';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import ToggleOnIcon from '@material-ui/icons/ToggleOn';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
export default function AccountPage() {
    return (
        <>
           
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)",marginBottom:"5vh"}}>
                    <div className="card-body" style={{display:"inline-flex",}}>
                      <Avatar src={Image} style={{height:"15vw",width:"15vw",marginRight:"2vw"}}/>
                      <div>
                        <Typography variant="h4">Mohd Naved Khan</Typography>
                        
                        <Typography variant="h6">Computer Enginnering Undergraduate</Typography>
                        <Typography variant="subtitle1">3rd year , Room no.116 (Top Floor)</Typography>
                        <div style={{display:"inline-flex",margin:"2px"}}>
                            <ContactPhoneIcon style={{marginRight:"1vw"}}/>
                            <Typography variant="body1">8979785727</Typography>
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
                            <Typography variant="h4">Facilities</Typography>
                        </div>
                        <MenuList>
                                <MenuItem><AccountBalanceWalletIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Account</Typography></MenuItem>
                                <MenuItem><PaymentIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Payment</Typography></MenuItem>
                                <MenuItem><RoomServiceIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Room Service</Typography></MenuItem>
                                <MenuItem><ToggleOnIcon style={{marginRight:"2vw"}}/><Typography variant="h6">Close/Open Dining Account</Typography></MenuItem>
                            </MenuList>

                    </div>
                        
            </div>
        </>
    )
}
