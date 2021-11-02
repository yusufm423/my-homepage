import React from 'react'
import image from './amulogo.jpg'
import { Link, useLocation, useHistory } from 'react-router-dom'

export default function Navbar(props) {
    let history = useHistory();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        history.push('/login')
        console.log("Logged Out Successfully")
    }
    let location = useLocation()
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark " style={{backgroundColor:"rgb(40,40,40)"}}>
                <div className="container-fluid">
                <img src={image} className="mx-2" alt="AMU logo" />
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className={`nav-link ${location.pathname==="/"?"active":""} `} aria-current="page" to="/">{props.tab1}</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <Link className={`nav-link ${location.pathname==="/ttable"?"active":""} `} to="/ttable">{props.tab2}</Link>
                    </li>
                    <li className="nav-item mx-1">
                    <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" to="!#">{props.tab3}</Link>
                    </li>
                    <li className="nav-item mx-1">
                    <Link className={`nav-link ${location.pathname==="/account"?"active":""} `} to="/account" replace>{props.tab4}</Link>
                    </li>
                    </ul> 
                    {!localStorage.getItem('token') ? <form className="d-flex">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <Link to="/login"><button className="btn btn-outline-warning mx-2" type="submit">LogIn</button></Link>
                    <Link to="/signup"><button className="btn btn-outline-warning mx-2" type="submit">SignUp</button></Link>
                    </form>: 
                    <button onClick={handleLogout} className="btn btn-outline-warning mx-2">Logout</button>}
                </div>
                </div>
            </nav>
        </div>
    )
}

