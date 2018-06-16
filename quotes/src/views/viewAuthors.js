import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";
import Quote from "../Quote";
import {findAuthors, filterQuotesByAuthor} from "../libs/Utilities"

class viewAuthors extends Component {
    constructor(props) {
        super(props);
        this.state = {author: null};
    }

    showQuotes(author) {
        const authors = this.refs.authors;
        authors.classList.add("hidden");

        this.setState({author: author});
    }

    showAuthors() {
        this.setState({author: null});

        var authors = this.refs.authors;
        authors.classList.remove("hidden");
    }

    render() {
        return (
			<div className="container components">
				<div className="col-sm-2 buttons">
					<div className="row">
						<div className="col-sm-12 button" onClick={this.showAuthors.bind(this)}>
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
				<div className="col-sm-10 view" id="authors" ref="authors">
					<ul>
                        {
                            findAuthors().map(
                                (author) => (
                                    <li><a onClick={() => this.showQuotes(author)} href="#" className="quote-link" activeClassName="active">{author}</a> </li>
                                )
                            )
                        }
					</ul>
				</div>
				<div className="col-sm-10 view">
                    {
                        filterQuotesByAuthor(this.state.author).map(
                            (quote) => (
                                <Quote text={quote.content} author={quote.author} img={quote.img}/>
                            )
                        )
                    }
                </div>
			</div>
        );
    }
}

export default viewAuthors;