import React, { Component } from "react";
import Quote from "./Quote";
import "./Home.css";

class Home extends Component {
    constructor(props) {
        super(props);
        this.quotes = [];
        this.getQuotesFromSession();
        this.state = { quotes: this.quotes };

        this.content = "Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата.";
        this.author = "Оскар Уайлд";
    }

    getQuotesFromSession() {
        var storedQuotes = sessionStorage.getItem("quotes");
        if (storedQuotes == null) {
            window.sessionStorage.setItem("quotes", JSON.stringify(this.quotes));
        } else {
            this.quotes = JSON.parse(storedQuotes);
        }
    }

    render() {
        return <div>
            <div className="banner">
                <div className="container banner-text text-center">
                    <h1>Цитат на деня</h1>
                    <p>{this.content}</p>
                    <p>- {this.author}</p>
                </div>
            </div>


            <div className="container">
                <h2 className="heading-margin text-center">Последно добавени цитати</h2>
                <div className="offset-md-2">
                    <div>
                        {
                            this.state.quotes.reverse().map(
                                (quote) => (
                                    <Quote content={quote.content.toString()} author={quote.author.toString()} img={quote.img} />
                                ))
                        }
                        <Quote
                            content={"Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата."}
                            author={"Оскар Уайлд"} 
                            img={"/images/flowers.jpg"}/>
                        <Quote
                            content={"Може ли разстоянието наистина да те раздели от приятелите ти... Ако искаш да си с някого, когото обичаш, не си ли вече там при него?"}
                            author={"Ричард Бах"}
                            img={"/images/lake.jpg"} />
                        <Quote content={"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."} author={"Джон Стюарт Мил"} img={"/images/sun.jpg"} />
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Home;