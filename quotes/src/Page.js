import React, { Component } from "react";
import Quote from "./Quote";
import "./page.css";

class Page extends Component {
    constructor(props) {
        super(props);
        this.quotes = [];
        this.getQuotesFromSession();
        this.state = {quotes: this.quotes};
    }

    getQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("personal");
        if(storedQuotes == null) {
            window.sessionStorage.setItem("personal", JSON.stringify(this.quotes));
        } else {
            this.quotes = JSON.parse(storedQuotes);
        }
    }

    render() {
        return (
            <div id="quotes">
                {
                    this.state.quotes.reverse().map(
                        (quote) => (
                        <Quote text={quote.text.toString()} author={quote.author.toString()}/>
                        )
                    )
                }
                <Quote text={"Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата."} author={"Оскар Уайлд"}/>
                <Quote text={"Може ли разстоянието наистина да те раздели от приятелите ти... Ако искаш да си с някого, когото обичаш, не си ли вече там при него?"} author={"Ричард Бах"} />
                <Quote text={"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."} author={"Джон Стюарт Мил"} />
                <Quote text={"Щастието не е крайна спирка. То е начин на пътуване."} author={"неизвестен"} />
            </div>
        );
    }
}

export default Page;