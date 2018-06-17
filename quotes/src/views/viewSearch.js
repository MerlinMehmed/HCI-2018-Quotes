import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";
import Quote from "../Quote";
import { findAllQuotes } from "../libs/Utilities";

class ViewSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { quotes: [] };
        this.searchTerm = "";
    }

    componentDidMount() {
        const queryString = this.props.location.search;
        if (queryString) {
            const queryParts = queryString.split("=");
            if (queryParts && queryParts.length > 1) {
                this.searchTerm = decodeURIComponent(queryParts[1]);
                const search = this.searchTerm.toLowerCase();
                const result = findAllQuotes().filter(x => x.content.toLowerCase().indexOf(search) >= 0 || x.author.toLowerCase().indexOf(search) >= 0);
                this.setState({ quotes: result });
            }
        }
    }

    render() {
        return (
            <div className="container components">
                <div className="row">
                    <div className="col-sm-2 buttons">
                        <div className="row">
                            <div className="col-sm-12 button">
                                <Link to="/Browse/Authors" className="link" activeClassName="active">Автори</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 button">
                                <Link to="/Browse/Books and magazines" className="link" activeClassName="active">Книги и списания</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12 button">
                                <Link to="/Browse/Categories" className="link" activeClassName="active">Категории</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-10 view">
                        <h3>{this.state.quotes.length === 1 ? "Намерен" : "Намерени"} {this.state.quotes.length} {this.state.quotes.length === 1 ? "резултат" : "резултата"} за "{this.searchTerm}"</h3>
                        {
                            this.state.quotes.map(
                                (quote) => (
                                    <Quote content={quote.content} author={quote.author} img={quote.img} />
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewSearch;