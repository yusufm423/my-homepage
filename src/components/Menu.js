import React from 'react'
import { Typography } from '@material-ui/core'
import { ListItem,List } from '@material-ui/core'
import {useSelector} from "react-redux"
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { gettimetable } from '../Actions'
export default function Menu() {
    const index = String(new Date().getDay())
    const dispatch = useDispatch()
    // console.log(index)
    useEffect(() => {

        return dispatch(gettimetable())
    }, [dispatch])

    const day = useSelector(state => {
        // console.log(state)
        return state?.timetable[0]?.Days})

    return (
        <>

        <div className="card mb-3" style={{borderRadius:"15px", backgroundColor:"rgb(255,255,255,0.5)"}}>
        <div className="card-header bg-transparent"><h5>Menu of the Day</h5></div>
        <div className="card-body">
        <div className="list-group">

        <List >
           <Typography variant="h6"> 
                        <ListItem button style={{display:"block"}}>
                        <Typography variant="h6">Breakfast</Typography>
                        <Typography paragraph>{day?day[index%7]?.breakfast:""}</Typography>
                        </ListItem>
                        <ListItem button style={{display:"block"}}>
                        <Typography variant="h6">Lunch</Typography>
                        <Typography paragraph>{day?day[index%7]?.lunch:""}</Typography>
                        </ListItem>
                        <ListItem button style={{display:"block"}}>
                        <Typography variant="h6">Dinner</Typography>
                        <Typography paragraph>{day?day[index%7]?.dinner:""}</Typography>
                        </ListItem>
            </Typography>
            </List>
            </div>
        </div>
        </div>
        </>
    )
}
