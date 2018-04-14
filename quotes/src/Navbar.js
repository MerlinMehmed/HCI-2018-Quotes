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
                            <Link to="/" className="nav-link" activeClassName="active">Начало</Link>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Цитати</a>
                                <div className="dropdown-menu">
									<Link to="/Browse/Authors" className="nav-link dropdown-item" activeClassName="active">Автори</Link>
									<Link to="/Browse/Books and magazines" className="nav-link dropdown-item" activeClassName="active">Книги и списания</Link>
									<Link to="/Browse/Categories" className="nav-link dropdown-item" activeClassName="active">Категории</Link>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Лични Цитати</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Търсене</a>
                        </li>
                        <li className="nav-item">
                            <Link to="/addQuote" className="nav-link" activeClassName="active">Добави цитат</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addPersonalQuote" className="nav-link" activeClassName="active">Добави личен цитат</Link>
                        </li>

                    </ul>
                    <ul className="navbar-nav custom-right ml-auto">
                        <li className="nav-item">
                            <div className="search-container">
                                <form action="/">
                                    <input type="text" placeholder="Търси.." name="search" />
                                    <button type="submit"><i className="fa fa-search"></i></button>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link" activeClassName="active">Влез</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/register" className="nav-link" activeClassName="active">Регистрация</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;