import React, { Component } from "react";
import Quote from "./Quote";
import Navbar from "./Navbar";

class Home extends Component {
    constructor(props) {
        super(props);
        this.text = "Come what may, bad days shall pass, exactly like all the others.";
        this.author = "William Shakespeare";
    }

    render() {
        return (
            <div>
                <h1>Quote of the day! :)</h1>
                <Quote text={this.text} author={this.author} />
            </div>
        );
    }
}

export default Home;