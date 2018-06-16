import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
    componentWillMount() {
        this.username = sessionStorage.getItem("username");
    }

    logout() {
        sessionStorage.clear();
        window.location.href = "/";
    }

    render() {
        let rightMenu;
        if (this.username) {
            rightMenu = (
                <ul className="navbar-nav custom-right ml-auto">
                    <li className="nav-item">
                        <div className="search-container">
                            <form action="/">
                                <input type="text" placeholder="Търси.." name="search" id="search-input" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/profile" className="nav-link" activeClassName="active">Здравей, {this.username}</NavLink>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link logout-btn" onClick={this.logout}>Изход</button>
                    </li>
                </ul>
            );
        } else {
            rightMenu = (
                <ul className="navbar-nav custom-right ml-auto">
                    <li className="nav-item">
                        <div className="search-container">
                            <form action="/">
                                <input type="text" placeholder="Търси.." name="search" id="search-input" />
                                <button type="submit"><i className="fa fa-search"></i></button>
                            </form>
                        </div>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/login" className="nav-link" activeClassName="active">Влез</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/register" className="nav-link" activeClassName="active">Регистрация</NavLink>
                    </li>
                </ul>
            );
        }
        return (
            <nav className="navbar navbar-expand-sm custom-nav">
                <div className="navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarToggler">
                    <a className="navbar-brand" href="/"><img className="logo" src="/images/logo.png"/></a>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" activeClassName="active">Начало</NavLink>
                        </li>
                        <li className="nav-item">
                            <div className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">Цитати</a>
                                <div className="dropdown-menu">
                                    <NavLink to="/Browse/Authors" className="nav-link dropdown-item" activeClassName="active">Автори</NavLink>
                                    <NavLink to="/Browse/Books and magazines" className="nav-link dropdown-item" activeClassName="active">Книги и списания</NavLink>
                                    <NavLink to="/Browse/Categories" className="nav-link dropdown-item" activeClassName="active">Категории</NavLink>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/page" className="nav-link" activeClassName="active">Лични цитати</NavLink>
                        </li>
                    </ul>
                    {rightMenu}
                </div>
            </nav>
        );
    }
}

export default Navbar;