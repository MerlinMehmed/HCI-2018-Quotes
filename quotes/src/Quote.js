import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Quote.css";

class Quote extends Component {

    likeQuote() {
        var currentState = document.getElementById("heart").style.color;
        if(currentState == "red") {
            document.getElementById("heart").style.color = "white";
        } else {
            document.getElementById("heart").style.color = "red";
        }
    }

    render() {
        return (
            <div className="quote">
                <div className="quote-content">
                    <div className="quote-body">
                        <blockquote>{this.props.text}</blockquote>
                        <cite>- {this.props.author}</cite>
                    </div>
                    <img className="quote-img" src="images/ocean.png" width="600px" />
                </div>
                <div className="quote-bar" width="600px">
                    <span className="dropdown">
                        <span className="fa fa-star checked star dropbtn" onClick="rateQuote()"></span>
                        <span id="rate-quote dropdown-content" className="sth">
                            <span className="fa fa-star star-rate"></span>
                            <span className="fa fa-star star-rate"></span>
                            <span className="fa fa-star star-rate"></span>
                            <span className="fa fa-star star-rate"></span>
                            <span className="fa fa-star star-rate"></span>
                        </span>
                    </span>
                    <span>
                        <iframe src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&layout=button&size=small&mobile_iframe=true&width=59&height=20&appId" width="59" height="20" className="facebook-share" scrolling="no" frameBorder="0" allowTransparency="true"></iframe>
                    </span>
                    <span>
                        <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world">Tweet</a>
                    </span>
                    <span id="heart" className="heart" onClick={this.likeQuote}>
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