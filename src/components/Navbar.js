import React from 'react'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#!">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#!">{props.tab1}</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#!">{props.tab2}</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#!">{props.tab3}</a>
                    </li>
                    <li className="nav-item mx-1">
                        <a className="nav-link" href="#!">{props.tab4}</a>
                    </li>
                    </ul> 
                    <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-warning" type="submit">Search</button>
                    </form>
                </div>
                </div>
            </nav>
        </div>
    )
}
