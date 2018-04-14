import React, { Component } from "react";
import Quote from "./Quote";
import Navbar from "./Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.text = "Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата.";
        this.author = "Оскар Уайлд";
    }

    render() {
        return (
            <div>
                <h1>Цитат на деня! :)</h1>
                <Quote text={this.text} author={this.author} />

                <h2 className="heading-margin">Последно добавени цитати</h2>
                <Quote text={"Нищо не лекува така добре душата както вълненията, а от вълненията може да ни излекува само душата."} author={"Оскар Уайлд"} />
                <Quote text={"Може ли разстоянието наистина да те раздели от приятелите ти... Ако искаш да си с някого, когото обичаш, не си ли вече там при него?"} author={"Ричард Бах"} />
                <Quote text={"Запиташ ли се дали си щастлив, веднага спираш да бъдеш."} author={"Джон Стюарт Мил"} />
            </div>
        );
    }
}

export default Home;