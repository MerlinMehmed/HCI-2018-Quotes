import React, { Component } from "react";
import Quote from "./Quote";
import "./Profile.css";
import NavLink from "react-router-dom/NavLink";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.favQuotes = [];
        this.personal = [];
        this.getFavouriteQuotesFromSession();
        this.getPersonalQuotesFromSession()
        this.state = {
            favQuotes: this.favQuotes,
            personal: this.personal
        };
    }

    getFavouriteQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("favourite");
        if (storedQuotes == null) {
            window.sessionStorage.setItem("favourite", JSON.stringify(this.favQuotes));
        } else {
            this.favQuotes = JSON.parse(storedQuotes);
        }
    }

    getPersonalQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("personal");
        if (storedQuotes == null) {
            window.sessionStorage.setItem("personal", JSON.stringify(this.personal));
        } else {
            this.personal = JSON.parse(storedQuotes);
        }
    }

    showQuotes(id) {
        const personal = this.refs.personal;
        const favourites = this.refs.favourites;

        if (id === "favourites") {
            favourites.classList.remove("hidden");
            personal.classList.add("hidden");
        } else {
            personal.classList.remove("hidden");
            favourites.classList.add("hidden");
        }
    }

    render() {
        return (
            <div className="container">
                <div className="top-margin row">
                    <div className="col-md-4">
                        <h2>ПоМЕло</h2>
                        <img src="images/profile.png" className="profile-img" />
                        <p className="top-margin"><em>Любим автор: </em>Джон Стайнбек</p>
                        <p><em>Любим цитат: </em>"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."</p>
                        <ul className="nav nav-tabs flex-column nav-vertical">
                            <li className="nav-item" onClick={() => this.showQuotes("favourites")}><a href="#favourites" className="nav-link active" data-toggle="tab" role="tab">Любими цитати</a></li>
                            <li className="nav-item" onClick={() => this.showQuotes("personal")}><a href="#personal" className="nav-link" data-toggle="tab" role="tab">Лично творчество</a></li>
                        </ul>
                        <div className="button btn-add top-margin">
                            <NavLink to="/addQuote" className="link" activeClassName="active">Добави цитат</NavLink>
                        </div>
                        <div className="button btn-add">
                            <NavLink to="/addPersonalQuote" className="link" activeClassName="active">Добави личен цитат</NavLink>
                        </div>
                    </div>
                    <div className="quotes col-md-8">
                        <div id="favourites" ref="favourites">
                            <h3>Любими цитати</h3>
                            {
                                this.state.favQuotes.length ? this.state.favQuotes.reverse().map(
                                    (quote, index) => (
                                        <Quote key={index} content={quote.content.toString()} author={quote.author.toString()} img={quote.img} />
                                    )
                                ) :
                                    <p>Все още нямате любими цитати.</p>
                            }
                        </div>
                        <div id="personal" className="hidden" ref="personal">
                            <h3>Лично творчество</h3>
                            {
                                this.state.personal.length ? this.state.personal.reverse().map((quote) => (
                                    <Quote content={quote.content.toString()} author={quote.author.toString()} img={quote.img}/>
                                )) :
                                    <p>Все още нямате добавени цитати.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;