import React from 'react'
import { Typography } from '@material-ui/core'
import { ListItem,List } from '@material-ui/core'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'



export default function Notices(id) {
    id=id.id
    let count=0
    // console.log(id)
    const notices = useSelector(state=>state?.notice)
    

    return (
        <>
        
        <div id={id} className="card mb-3" style={{borderRadius:"15px", backgroundColor:"rgb(255,255,255,0.5)",overflow:"auto"}} >
        <div className="card-header bg-transparent"><Typography variant="h5">Notices and Updates</Typography></div>
        <div className="card-body" >
        <List style={{overflow:"auto"}}>
           <Typography variant="h6"> 
                        {notices.length?notices.map((item)=>{
                            count=count+1
                            return <ListItem button style={{display:"block"}}><div style={{display:"none"}}>{count}</div>
                             <Link to={`/viewnotices?${count}`}
                             style={{textDecoration:"none",color:"inherit"}}
                             ><Typography variant="h6">{item.heading}
                             </Typography>
                             </Link>
                             <div>
                            <Typography variant="body1">
                            {item.Date[8]}{item.Date[9]}/{item.Date[4]}{item.Date[5]}{item.Date[6]}/{item.Date[13]}{item.Date[14]}
                             </Typography>
                             </div>
                             </ListItem>}):<Typography variant="body1">Loading Notices...</Typography>}
            </Typography>
            </List>
        </div>
        </div>
        
        </>
    )
}
