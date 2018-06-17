import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Quote.css";
import Rating from "./Rating"
import { deletePersonalQuote } from "./libs/Utilities";
import {NotificationContainer, NotificationManager} from 'react-notifications';

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
            content: this.props.content,
            author: this.props.author,
            img: this.props.img
        });
        window.sessionStorage.setItem("favourite", JSON.stringify(storedQuotes));
    }

    removeFavouriteQuote() {
        let storedQuotes = JSON.parse(sessionStorage.getItem("favourite"));
        var content = this.props.content;
        storedQuotes = storedQuotes.filter(function (quote) {
            return quote.content !== content
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
        const content = this.props.content;
        if (storedQuotes.find(x => x.content === content)) {
            this.markHeartRed();
        }
    }

    deleteQuote() {
        deletePersonalQuote(this.props.id);
        this.refs.quote.style.display = "none";
        NotificationManager.success('Успешно изтрит!');
    }

    render() {
        let editButtons = "";
        if (this.props.isPersonal) {
            editButtons =
                <div className="edit-buttons">
                    <button type="button" className="btn btn-sm btn-info">Редактирай</button>
                    <button type="button" onClick={this.deleteQuote.bind(this)} className="btn btn-sm btn-danger">Изтрий</button>
                </div>;
        }

        return (
            <div ref="quote" className="quote">
                <div className="quote-content">
                    <span className="quote-body">
                        <blockquote>{this.props.content}</blockquote>
                        <cite>- {this.props.author}</cite>
                    </span>
                    <img className="quote-img img-responsive" src={this.props.img || "/images/ocean2.png"} responsive="true" />
                </div>
                <div className="quote-bar">
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
                {editButtons}
                <NotificationContainer/>
            </div>
        );
    }
}

Quote.propTypes = {
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    isPersonal: PropTypes.bool,
    id: PropTypes.number
};

export default Quote;