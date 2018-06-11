import React, { Component } from "react";
import Quote from "./Quote";
import { Link } from "react-router-dom";
import "./Profile.css";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.quotes = [];
        this.getFavouriteQuotesFromSession();
        this.state = {favQuotes: this.favQuotes};
    }

    getFavouriteQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("favourite");
        if(storedQuotes == null) {
            window.sessionStorage.setItem("favourite", JSON.stringify(this.quotes));
        } else {
            this.favQuotes = JSON.parse(storedQuotes);
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
                        <Link to="/addQuote" className="link" activeClassName="active">Добави цитат</Link>
                    </div>
                    <div className="button btn-add">
                        <Link to="/addPersonalQuote" className="link" activeClassName="active">Добави личен цитат</Link>
                    </div>
                </div>
                <div className="quotes col-md-8">
                    <div id="favourites" ref="favourites">
                        <h3>Любими цитати</h3>
                        {
                            this.state.favQuotes ? this.state.favQuotes.reverse().map(
                                (quote) => (
                                    <Quote text={quote.text.toString()} author={quote.author.toString()}/>
                                )
                            ) : []
                        }
                        <Quote text={"Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата."} author={"Оскар Уайлд"} />
                        <Quote text={"Може ли разстоянието наистина да те раздели от приятелите ти... Ако искаш да си с някого, когото обичаш, не си ли вече там при него?"} author={"Ричард Бах"} />
                    </div>
                    <div id="personal" className="hidden" ref="personal">
                        <h3>Лично творчество</h3>
                        <Quote text={"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."} author={"ПоМЕло"} />
                        <Quote text={"Щастието не е крайна спирка. То е начин на пътуване."} author={"ПоМЕло"} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;