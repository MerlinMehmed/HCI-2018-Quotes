import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";

class viewCategories extends Component {
    render() {
        return (
			<div className="container col-lg-12 components">
				<div className="col-sm-2 buttons">
					<div className="row">
						<button className="col-sm-12 button" type="button">
							<Link to="/Browse/Authors" className="link" activeClassName="active">Автори</Link>
						</button>
					</div>
					<div className="row">
						<button className="col-sm-12 button" type="button">
							<Link to="/Browse/Books and magazines" className="link" activeClassName="active">Книги и списания</Link>
						</button>	
					</div>
					<div className="row">
						<button className="col-sm-12 button" type="button">
							<Link to="/Browse/Categories" className="link" activeClassName="active">Категории</Link>
						</button>	
					</div>
				</div>
				<div className="col-sm-10 view" id="categories">
					<ul>
						<li><a href="url">Любов</a></li>
						<li><a href="url">Приятелство</a></li>
						<li><a href="url">Живот</a></li>
						<li><a href="url">Щастие</a></li>
						<li><a href="url">Тъга</a></li>
						<li><a href="url">Време</a></li>
						<li><a href="url">Добро</a></li>
						<li><a href="url">Доверие</a></li>
						<li><a href="url">Егоизъм</a></li>
						<li><a href="url">Знание</a></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default viewCategories;