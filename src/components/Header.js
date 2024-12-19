import * as React from "react";
import {StaticImage} from "gatsby-plugin-image"

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


const Header = () => {
    return (
        <div className="container-fluid bg-white shadow-sm py-1">
            <nav className="navbar navbar-expand-lg container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <StaticImage src="../images/home/logo.svg"
                                     className="rounded-top w-75" alt="A image title" placeholder="blurred"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll mx-auto">
                            <li className="nav-item mx-2">
                                <a className="nav-link active text-primary fw-500" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2">
                                <a className="nav-link fw-500" href="#">About</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link fw-500" href="#">Work</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link fw-500" href="#">Community</a>
                            </li>

                            <li className="nav-item mx-2">
                                <a className="nav-link fw-500" href="#" tabIndex="-1" aria-disabled="true">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                                <button className="btn btn-primary me-2 px-4" type="submit">Login</button>
                                <button className="btn px-4" type="submit">Register</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header