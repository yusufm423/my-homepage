import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <Link className="navbar-brand" to="/">{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">{props.tab1}</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#!">{props.tab2}</a>
                    </li>
                    <li className="nav-item mx-1">
                    <Link className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" to="#!">{props.tab3}</Link>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#!">{props.tab4}</a>
                    </li>
                    </ul> 
                    <form className="d-flex">
                    {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <Link to="/login"><button className="btn btn-outline-warning mx-2" type="submit">LogIn</button></Link>
                    <Link to="/signup"><button className="btn btn-outline-warning mx-2" type="submit">SignUp</button></Link>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}

