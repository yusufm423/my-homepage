import React from 'react'
import image from './NT.jpeg';
import AboutUs from './AboutUs';

export default function HomeMid() {
    return (
        <>
            <div className="mb-3">
                <img src={image} className="conatiner img-fluid card-img-top rounded" alt="Nadeem Tarin Hall"/>
            </div>
            <div className="card mb-3" style={{borderRadius:"15px",opacity:1}}>
                    <div className="card-body">
                        <div className=" mb-3"><AboutUs/></div>
                    </div>
            </div>
        </>
    )
}
