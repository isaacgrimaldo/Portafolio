import React from 'react'
import { Link } from 'react-router-dom';


export const NavBarMovil = () => {
    return (
        <div className="vh10 bg-dark">
            <div className="collapse" id="navbarToggleExternalContent">
                <div className="bg-dark p-2">
                    <div className="nav flex-column">
                        <li className="nav-item text-center bg-primary ">
                            <Link
                                className="nav-link text-white nab-links-mobile"
                                to="/home"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item text-center bg-primary mt-1">
                        <Link
                                className="nav-link text-white nab-links-mobile"
                                to="/works"
                            >
                                Works
                            </Link>
                        </li>
                        <li className="nav-item text-center bg-primary mt-1 ">
                        <Link
                                className="nav-link text-white nab-links-mobile"
                                to="/about"
                            >
                                about
                            </Link>
                        </li>
                        
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon animate__animated animate__fadeIn"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}
