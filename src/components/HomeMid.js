import React from 'react'
import image from './NT.jpeg';
import AboutUs from './AboutUs';

export default function HomeMid() {
    return (
        <>
            <div className="card mb-3" style={{borderRadius:"15px"}}>
                <img src={image} className="conatiner img-fluid card-img-top" alt="Nadeem Tarin Hall"/>
                    <div className="card-body">
                        <p className="card-text"><div className=" mb-3"><AboutUs/></div></p>
                    </div>
            </div>
        </>
    )
}
