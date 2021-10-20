import React from 'react'
import image from './NT.jpeg';
import AboutUs from './AboutUs';
import { Typography } from '@material-ui/core';

export default function HomeMid() {
    return (
        <>
            <div className="mb-3">
                <img src={image} className="conatiner img-fluid card-img-top rounded" alt="Nadeem Tarin Hall"/>
            </div>
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                    <div className="card-body">
                    <Typography variant="h4">About us</Typography>
                        <div className=" mb-3"><AboutUs/></div>
                    </div>
            </div>
        </>
    )
}
