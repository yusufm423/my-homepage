import React from 'react'
import Accountpage from './Account'

import Notices from './Notices';
import Menu from './Menu';
import { Redirect } from 'react-router';

export default function Account() {

    return localStorage.getItem('token')? (
        <>
           <div className="row">
           <div className="col-7 my-3 mb-3 Homemid1"><Accountpage/> </div>
            <div className="col-2 my-3 mb-3 menu1"><Menu/></div>
            <div className="col-3 my-3 mb-3"><Notices/></div>
            <div className="col-7 my-3 mb-3 Homemid2"><Accountpage/> </div>
            <div className="col-2 my-3 mb-3 menu2"><Menu/></div>
          </div>  
        </>
    ):<Redirect to="/login"/>
}