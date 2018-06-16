import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Quote.css";
import Rating from "./Rating"

class Quote extends Component {
    constructor(props) {
        super(props);
        this.setFavouriteQuotesToSession();
    }

    componentDidMount() {
        this.markLikedQuotes();
    }

    setFavouriteQuotesToSession() {
        let storedQuotes = sessionStorage.getItem("favourite");
        if (storedQuotes == null) {
            window.sessionStorage.setItem("favourite", JSON.stringify([]));
        }
    }

    addFavouriteQuote() {
        let storedQuotes = JSON.parse(sessionStorage.getItem("favourite"));
        storedQuotes.push({
            text: this.props.text,
            author: this.props.author,
            img: this.props.img
        });
        window.sessionStorage.setItem("favourite", JSON.stringify(storedQuotes));
    }

    removeFavouriteQuote() {
        let storedQuotes = JSON.parse(sessionStorage.getItem("favourite"));
        var text = this.props.text;
        storedQuotes = storedQuotes.filter(function (quote) {
            return quote.text !== text
        })
        window.sessionStorage.setItem("favourite", JSON.stringify(storedQuotes));
    }

    likeQuote() {
        var heart = this.refs.heart;
        if (heart.classList.contains("red")) {
            this.markHeartWhite();
            this.removeFavouriteQuote();
        } else {
            this.markHeartRed();
            this.addFavouriteQuote();
        }
    }

    markHeartRed() {
        const heart = this.refs.heart;
        heart.classList.remove("white");
        heart.classList.add("red");
    }

    markHeartWhite() {
        var heart = this.refs.heart;
        heart.classList.remove("red");
        heart.classList.add("white");
    }

    markLikedQuotes() {
        const storedQuotes = JSON.parse(sessionStorage.getItem("favourite"));
        const text = this.props.text;
        if (storedQuotes.find(x => x.text === text)) {
            this.markHeartRed();
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
                    <img className="quote-img img-responsive" src={this.props.img || "/images/ocean2.png"} responsive="true" />
                </div>
                <div className="quote-bar" width="600px">
                    <Rating rating="2" />
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