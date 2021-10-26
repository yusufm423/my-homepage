import React from 'react'
import HomeMid from './HomeMid';
import Notices from './Notices';
import Menu from './Menu';

export default function Home() {
    return (
        <>
           <div className="row">
            <div className="col-3 my-3 mb-3"><Notices/></div>
            <div className="col-7 my-3 mb-3"><HomeMid/> </div>
            <div className="col-2 my-3 mb-3"><Menu/></div> 
          </div>  
        </>
    )
}