import React, { useState } from 'react'
import Menu from './Menu'
import Notices from './Notices'
import{ Grid,  Button  ,Typography,Collapse, TextField}from '@material-ui/core'
export default function TimeTable() {
    const[edit,changeEdit]=useState(false)
    return (
        <>
            <div className="row">
            <div className="col-3 my-3 mb-3"><Notices/></div>
            <div className="col-7 my-3 mb-3"> 
                <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                        <div className="card-body">
                        <div className="card-header bg-transparent">
                            <Grid container direction="row" alignItems="center">
                            <Grid item xs={12} md={9}>
                            <h5>Time Table</h5>
                            </Grid>
                            <Grid item xs={6} md={2}>
                            <Button variant="outlined" color="primary" onClick={()=>changeEdit(!edit)}>
                                Edit
                            </Button>
                            </Grid>
                            <Grid item xs={6} md={1}>
                            <Button variant="outlined" color="primary" onClick={()=>changeEdit(false)}>
                                Save
                            </Button>
                            </Grid>
                            </Grid>
                            </div>
                            <div className="list-group mb-3">
                                   {['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'].map((day)=>
                                    <>
                                        <h6 className="my-2">{day}</h6>
                                        <p className="mx-4">
                                            <Typography variant="body1">Breakfast</Typography>
                                            <Collapse in={edit}>
                                            <TextField variant="filled" multiline maxRows={4} label="Breakfast"style={{
                                            height:"auto",
                                            width:"100%",
                                            }}
                                            />
                                            </Collapse>
                                            <Typography variant="body1">Lunch</Typography>
                                            <Collapse in={edit}>
                                            <TextField variant="filled" multiline maxRows={4} label="Lunch"style={{
                                            height:"auto",
                                            width:"100%",
                                            }}
                                            />
                                            </Collapse>
                                            <Typography variant="body1">Dinner</Typography>
                                            <Collapse in={edit}>
                                            <TextField variant="filled" multiline maxRows={4} label="Dinner"style={{
                                            height:"auto",
                                            width:"100%",
                                            }}
                                            />
                                            </Collapse>
                                        </p>
                                    </>
                                    )}
                                        
                                   
                            </div>
                        </div>
                </div>
            
            </div>
            <div className="col-2 my-3 mb-3"><Menu/></div> 
          </div>  
        </>
    )
}
