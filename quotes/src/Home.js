import React, { Component } from "react";
import Quote from "./Quote";

class Home extends Component {
    constructor(props) {
        super(props);
        this.quotes = [];
        this.getQuotesFromSession();
        this.state = {quotes: this.quotes};

        this.text = "Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата.";
        this.author = "Оскар Уайлд";
    }

    getQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("quotes");
        if(storedQuotes == null) {
            window.sessionStorage.setItem("quotes", JSON.stringify(this.quotes));
        } else {
            this.quotes = JSON.parse(storedQuotes);
        }
    }

    render() {
        return <div>
            <h1>Цитат на деня! :)</h1>
            <Quote text={this.text} author={this.author}/>

            <h2 className="heading-margin">Последно добавени цитати</h2>
            <div>
                {
                    this.state.quotes.reverse().map(
                        (quote) => (
                            <Quote text={quote.text.toString()} author={quote.author.toString()}/>
                        ))
                }
                <Quote
                    text={"Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата."}
                    author={"Оскар Уайлд"}/>
                <Quote
                    text={"Може ли разстоянието наистина да те раздели от приятелите ти... Ако искаш да си с някого, когото обичаш, не си ли вече там при него?"}
                    author={"Ричард Бах"}/>
                <Quote text={"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."} author={"Джон Стюарт Мил"}/>
            </div>
        </div>;
    }
}

export default Home;