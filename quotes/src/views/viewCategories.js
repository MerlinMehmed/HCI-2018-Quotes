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
						<li><Link to="/page" className="nav-link" activeClassName="active">Любов</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Приятелство</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Живот</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Щастие</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Тъга</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Време</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Добро</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Доверие</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Егоизъм</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Знание</Link></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default viewCategories;