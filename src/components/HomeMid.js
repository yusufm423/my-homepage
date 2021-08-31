import React from 'react'
import image from './NT.jpeg';
import AboutUs from './AboutUs';

export default function HomeMid() {
    return (
        <>
            <div className="mb-3">
                <img src={image} className="conatiner img-fluid card-img-top rounded" alt="Nadeem Tarin Hall"/>
            </div>
            <div className="card mb-3" style={{borderRadius:"15px",backgroundColor:"rgb(255,255,255,0.5)"}}>
                    <div className="card-body">
                    <div className="card-header bg-transparent"><h5>About Us</h5></div>
                        <div className=" mb-3"><AboutUs/></div>
                    </div>
            </div>
        </>
    )
}
