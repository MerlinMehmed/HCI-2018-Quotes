import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";

class viewSources extends Component {
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
				<div className="col-sm-10 view" id="books">
					<ul>
						<li><Link to="/page" className="nav-link" activeClassName="active">Дневникът на Ане Франк</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Здрач</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Отнесени от вихъра</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Мисли и забогатявай</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Шифърът на Леонардо</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Алхимикът</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Властелинът на пръстените</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Хари Потър</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Да убиеш присмехулник</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Гордост и предразсъдъци</Link></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default viewSources;