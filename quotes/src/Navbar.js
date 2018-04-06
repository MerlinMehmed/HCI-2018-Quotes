import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm custom-nav">
                <div className="navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <a className="navbar-brand" href="#">Logo</a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Browse</a>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">Authors</a>
                                    <a className="dropdown-item" href="#">Books and magazines</a>
                                    <a className="dropdown-item" href="#">Categories</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Personal Quotes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Search</a>
                        </li>

                    </ul>
                    <ul className="navbar-nav custom-right ml-auto">
                        <li className="nav-item">
                            <div className="search-container">
                                <form action="/">
                                    <input type="text" placeholder="Search.." name="search" />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" activeClassName="active">Log in</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Register</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;