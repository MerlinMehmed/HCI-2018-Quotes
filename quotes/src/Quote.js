import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Quote.css";
import Rating from "./Rating"

class Quote extends Component {

    likeQuote() {
        var heart = this.refs.heart;
        var currentState = heart.style.color;
        if(currentState === "red") {
            heart.style.color = "white";
        } else {
            heart.style.color = "red";
        }
    }

    render() {
        return (
            <div className="quote">
                <div className="quote-content">
                    <span className="quote-body">
                        <blockquote>{this.props.text}</blockquote>
                        <cite>- {this.props.author}</cite>
                    </span>
                    <img className="quote-img img-responsive" src="images/ocean2.png" responsive/>
                </div>
                <div className="quote-bar" width="600px">
                    <Rating rating="2"/>
                    <span>
                        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId" width="59" height="20" className="facebook-share" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
                    </span>
                    <span>
                        <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world">Tweet</a>
                    </span>
                    <span id="heart" ref="heart" className="heart" onClick={this.likeQuote.bind(this)}>
                        <i className="fa fa-heart"></i>
                    </span>
                </div>
            </div>
        );
    }
}

Quote.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};

export default Quote;