import React from 'react'
import { Typography } from '@material-ui/core'
import { ListItem,List } from '@material-ui/core'
import { useEffect } from 'react'

export default function Notices(id) {
    id=id.id
    console.log(id)
    return (
        <>
        
        <div id={id} className="card mb-3" style={{borderRadius:"15px", backgroundColor:"rgb(255,255,255,0.5)",}} >
        <div className="card-header bg-transparent"><Typography variant="h5">Notices and Updates</Typography></div>
        <div className="card-body" >
        <List >
           <Typography variant="h6"> 
                        <ListItem button>Change in today's menu</ListItem>
                        <ListItem button>Deficit for the previous month</ListItem>
                        <ListItem button>Vacancy for Dining Hall Senior</ListItem>
                        <ListItem button>Feedback regarding the change in wednesday menu</ListItem>
                        <ListItem button>Words from the provost</ListItem>
                        <ListItem button>Tradition of Dining hall</ListItem>
                        <ListItem button>Ranks of Dining Hall of AMU</ListItem>
                        <ListItem button>Timing Change for Sunday</ListItem>
                        <ListItem button>Notice regarding those who have not submitted their dues</ListItem>
                        
                       
           
            </Typography>
            </List>
        </div>
        </div>
        
        </>
    )
}
