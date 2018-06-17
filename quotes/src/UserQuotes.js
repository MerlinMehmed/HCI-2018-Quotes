import React, { Component } from "react";
import Quote from "./Quote";
import "./UserQuotes.css";

class UserQuotes extends Component {
    constructor(props) {
        super(props);
        this.quotes = [];
        this.getQuotesFromSession();
        this.state = { quotes: this.quotes };
    }

    getQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("personal");
        if (storedQuotes == null) {
            window.sessionStorage.setItem("personal", JSON.stringify(this.quotes));
        } else {
            this.quotes = JSON.parse(storedQuotes);
        }
    }

    render() {
        return (
            <div className="container">
                <h1 className="text-center heading-margin">Лично творчество на потребители</h1>
                <div id="quotes" className="offset-md-2 col-md-10">
                    {
                        this.state.quotes.reverse().map(
                            (quote, index) => (
                                <Quote key={index} content={quote.content.toString()} author={quote.author.toString()} img={quote.img} />
                            )
                        )
                    }
                    <Quote content={"Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата."} author={"Оскар Уайлд"} img={"/images/sky.jpg"} />
                    <Quote content={"Може ли разстоянието наистина да те раздели от приятелите ти... Ако искаш да си с някого, когото обичаш, не си ли вече там при него?"} author={"Ричард Бах"} img={"/images/lake.jpg"} />
                    <Quote content={"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."} author={"Джон Стюарт Мил"} img={"/images/forest.jpg"} />
                    <Quote content={"Щастието не е крайна спирка. То е начин на пътуване."} author={"неизвестен"} img={"/images/flowers.jpg"} />
                </div>
            </div>
        );
    }
}

export default UserQuotes;