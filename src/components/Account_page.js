import React from 'react'
import Account_page from './Account'
import Notices from './Notices';
import Menu from './Menu';

export default function Account() {
    return (
        <>
           <div className="row">
            <div className="col-3 my-3 mb-3"><Notices/></div>
            <div className="col-7 my-3 mb-3"><Account_page/> </div>
            <div className="col-2 my-3 mb-3"><Menu/></div> 
          </div>  
        </>
    )
}
