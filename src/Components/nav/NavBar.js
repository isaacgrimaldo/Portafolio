import React from 'react'
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <div className="vh10 bg-dar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link
                        className="navbar-brand nab-links animate__animated animate__fadeIn"
                        to="/home"
                    >
                      Home
                    </Link>
                    <div className="d-flex">
                        <Link
                            className="navbar-brand nab-links animate__animated animate__fadeIn"
                            to="/works"
                        >
                            Works
                    </Link>
                    <Link
                        className="navbar-brand nab-links animate__animated animate__fadeIn"
                        to="/about"
                    >
                        About
                    </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
