import React, { useState } from 'react'
import Menu from './Menu'
import Notices from './Notices'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { gettimetable } from '../Actions';
import { Grid, Button, Typography, Collapse, TextField } from '@material-ui/core'
import { CircularProgress } from '@material-ui/core';
import { edittimetable } from '../Actions';
import { ListItem, List } from '@material-ui/core';
export default function TimeTable() {
    const [edit, changeEdit] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {

        return dispatch(gettimetable())
    }, [dispatch])
    const store = useSelector(state => state?.timetable[0]?.Days)
    const [Data, setData] = useState()
    useEffect(() => setData(store), [store])

    if (!store)
        return <CircularProgress />
    // console.log(Data,store)
    return (
        <>
            <div className="row">
                <div className="col-7 my-3 mb-3 Homemid1">
                <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)" }}>
                        <div className="card-body">
                            <div className="card-header bg-transparent">
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} md={9}>
                                        <h5>Time Table</h5>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <Button variant="outlined" color="primary" onClick={() => changeEdit(!edit)}>
                                            Edit
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} md={1}>
                                        <Button variant="outlined" color="primary" onClick={() =>{ 
                                            changeEdit(false)
                                            dispatch(edittimetable(Data))
                                        }}>
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="list-group mb-3">
                                <List>
                                {
                                (store)?store?.map(day =>
                                    <ListItem button style={{padding:"10px"}}>
                                    <div key={day.count} >
                                        <Typography variant="h5">{day.name}</Typography>
                                        <div className="mx-4">
                                            <Typography variant="h6" style={{padding:"10px"}}>Breakfast: {day.breakfast}</Typography>
                                            <Collapse in={edit}>
                                                <TextField variant="filled" multiline maxRows={4} label="Breakfast" style={{
                                                    height: "auto",
                                                    width: "100%",
                                                }}
                                                value = {Data?Data[day.count].breakfast:""}
                                                onChange={(e)=>{
                                                    let newArr = [...Data]
                                                    newArr[day.count].breakfast=e.target.value
                                                    setData(newArr)
                                                }}
                                                />
                                            </Collapse>
                                            <Typography variant="h6" style={{padding:"10px"}}>Lunch: {day.lunch}</Typography>
                                            <Collapse in={edit}>
                                                <TextField variant="filled" multiline maxRows={4} label="Lunch" style={{
                                                    height: "auto",
                                                    width: "100%",
                                                }}
                                                value = {Data?Data[day.count].lunch:""}
                                                onChange={(e)=>{
                                                    let newArr = [...Data]
                                                    newArr[day.count].lunch=e.target.value
                                                    setData(newArr)
                                                }}
                                                />
                                            </Collapse>
                                            <Typography variant="h6" style={{padding:"10px"}}>Dinner: {day.dinner}</Typography>
                                            <Collapse in={edit}>
                                                <TextField variant="filled" multiline maxRows={4} label="Dinner" style={{
                                                    height: "auto",
                                                    width: "100%",
                                                }}
                                                value = {Data?Data[day.count].dinner:""}
                                                onChange={(e)=>{
                                                    let newArr = [...Data]
                                                    newArr[day.count].dinner=e.target.value
                                                    setData(newArr)
                                                }}
                                                />
                                            </Collapse>
                                        </div>
                                    </div>
                                    </ListItem>
                                ):<></>}
                                </List>


                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-2 my-3 mb-3 menu1"><Menu /></div>
                <div className="col-3 my-3 mb-3"><Notices /></div>
                <div className="col-7 my-3 mb-3 Homemid2">
                    <div className="card mb-3" style={{ borderRadius: "15px", backgroundColor: "rgb(255,255,255,0.5)" }}>
                        <div className="card-body">
                            <div className="card-header bg-transparent">
                                <Grid container direction="row" alignItems="center">
                                    <Grid item xs={12} md={9}>
                                        <h5>Time Table</h5>
                                    </Grid>
                                    <Grid item xs={6} md={2}>
                                        <Button variant="outlined" color="primary" onClick={() => changeEdit(!edit)}>
                                            Edit
                                        </Button>
                                    </Grid>
                                    <Grid item xs={6} md={1}>
                                        <Button variant="outlined" color="primary" onClick={() => {
                                            changeEdit(false)
                                            dispatch(edittimetable(Data))
                                        }}>
                                            Save
                                        </Button>
                                    </Grid>
                                </Grid>
                            </div>
                            <div className="list-group mb-3">
                                <List>
                                    {
                                        (store) ? store?.map(day =>
                                            <ListItem button style={{padding:"10px"}}>
                                                <div key={day.count} >
                                                    <Typography variant="h5">{day.name}</Typography>
                                                    <div className="mx-4">
                                                        <Typography variant="h6" style={{padding:"10px",width:"100%"}}>Breakfast: {day.breakfast}</Typography>
                                                        <Collapse in={edit}>
                                                            <TextField variant="filled" multiline maxRows={4} label="Breakfast" style={{
                                                                height: "auto",
                                                                width: "100%",
                                                            }}
                                                                value={Data ? Data[day.count].breakfast : ""}
                                                                onChange={(e) => {
                                                                    let newArr = [...Data]
                                                                    newArr[day.count].breakfast = e.target.value
                                                                    setData(newArr)
                                                                }}
                                                            />
                                                        </Collapse>
                                                        <Typography variant="h6" style={{padding:"10px"}}>Lunch: {day.lunch}</Typography>
                                                        <Collapse in={edit}>
                                                            <TextField variant="filled" multiline maxRows={4} label="Lunch" style={{
                                                                height: "auto",
                                                                width: "100%",
                                                            }}
                                                                value={Data ? Data[day.count].lunch : ""}
                                                                onChange={(e) => {
                                                                    let newArr = [...Data]
                                                                    newArr[day.count].lunch = e.target.value
                                                                    setData(newArr)
                                                                }}
                                                            />
                                                        </Collapse>
                                                        <Typography variant="h6" style={{padding:"10px"}}>Dinner: {day.dinner}</Typography>
                                                        <Collapse in={edit}>
                                                            <TextField variant="filled" multiline maxRows={4} label="Dinner" style={{
                                                                height: "auto",
                                                                width: "100%",
                                                            }}
                                                                value={Data ? Data[day.count].dinner : ""}
                                                                onChange={(e) => {
                                                                    let newArr = [...Data]
                                                                    newArr[day.count].dinner = e.target.value
                                                                    setData(newArr)
                                                                }}

                                                            />
                                                        </Collapse>
                                                    </div>
                                                </div>
                                            </ListItem>
                                        ) : <></>}
                                </List>


                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-2 my-3 mb-3 menu2"><Menu /></div>
            </div>
        </>
    )
}
