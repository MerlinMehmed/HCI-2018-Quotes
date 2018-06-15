import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";
import Quote from "../Quote";
import {filterQuotesBySource, findSources} from "../libs/Utilities";

class viewSources extends Component {
    constructor(props) {
        super(props);
        this.state = {source: null};
    }

    showQuotes(source) {
        const authors = this.refs.sources;
        authors.classList.add("hidden");

        this.state.source = source;
    }

    showSources() {
        this.state.source = null;

        var authors = this.refs.sources;
        authors.classList.remove("hidden");
    }

    render() {
        return (
			<div className="container col-lg-12 components">
				<div className="col-sm-2 buttons">
					<div className="row">
						<div className="col-sm-12 button">
							<Link to="/Browse/Authors" className="link" activeClassName="active">Автори</Link>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12 button" onClick={this.showSources.bind(this)}>
							<Link to="/Browse/Books and magazines" className="link" activeClassName="active">Книги и списания</Link>
						</div>	
					</div>
					<div className="row">
						<div className="col-sm-12 button">
							<Link to="/Browse/Categories" className="link" activeClassName="active">Категории</Link>
						</div>	
					</div>
				</div>
				<div className="col-sm-10 view" id="books" ref="sources">
					<ul>
                        {
                            findSources().map(
                                (source) => (
                                    <li onClick={() => this.showQuotes(source)}><a href="#" className="quote-link" activeClassName="active">{source}</a> </li>
                                )
                            )
                        }
					</ul>
				</div>
                <div className="col-sm-10 view">
                    {
                        filterQuotesBySource(this.state.source).map(
                            (quote) => (
                                <Quote text={quote.content} author={quote.author}/>
                            )
                        )
                    }
                </div>
			</div>
        );
    }
}

export default viewSources;