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
            </div>
        );
    }
}

export default Home;