import React from 'react'
import { Typography } from '@material-ui/core'
import { ListItem,List } from '@material-ui/core'

export default function Menu() {
    return (
        <>

        <div className="card mb-3" style={{borderRadius:"15px", backgroundColor:"rgb(255,255,255,0.5)"}}>
        <div className="card-header bg-transparent"><h5>Menu of the Day</h5></div>
        <div className="card-body">
        <div className="list-group">

        <List >
           <Typography variant="h6"> 
                        <ListItem button>Breakfast</ListItem>
                        <ListItem button>Lunch</ListItem>
                        <ListItem button>Dinner</ListItem>
            </Typography>
            </List>
            </div>
        </div>
        </div>
        </>
    )
}
