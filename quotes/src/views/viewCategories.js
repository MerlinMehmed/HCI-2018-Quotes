import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";
import Quote from "../Quote";
import {filterQuotesByCategory, findCategories} from "../libs/Utilities";

class ViewCategories extends Component {
    constructor(props) {
        super(props);
        this.state = {category: null};
    }

    showQuotes(category) {
        const authors = this.refs.categories;
        authors.classList.add("hidden");

        this.setState({category: category});
    }

    showCategories() {
        this.setState({category: null});

        var authors = this.refs.categories;
        authors.classList.remove("hidden");
    }

    render() {
        return (
			<div className="container components">
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
						<div className="col-sm-12 button" onClick={this.showCategories.bind(this)}>
							<Link to="/Browse/Categories" className="link" activeClassName="active">Категории</Link>
						</div>	
					</div>
				</div>
				<div className="col-sm-10 view" id="categories" ref="categories">
					<ul>
                        {
                            findCategories().map(
                                (category) => (
                                    <li><a href="#" onClick={() => this.showQuotes(category)} className="quote-link" activeClassName="active">{category}</a> </li>
                                )
                            )
                        }
					</ul>
				</div>
                <div className="col-sm-10 view">
                    {
                        filterQuotesByCategory(this.state.category).map(
                            (quote) => (
                                <Quote content={quote.content} author={quote.author} img={quote.img}/>
                            )
                        )
                    }
                </div>
			</div>
        );
    }
}

export default ViewCategories;