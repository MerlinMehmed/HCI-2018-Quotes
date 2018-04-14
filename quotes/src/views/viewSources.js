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
						<li><a href="url">Дневникът на Ане Франк</a></li>
						<li><a href="url">Здрач</a></li>
						<li><a href="url">Отнесени от вихъра</a></li>
						<li><a href="url">Мисли и забогатявай</a></li>
						<li><a href="url">Шифърът на Леонардо</a></li>
						<li><a href="url">Алхимикът</a></li>
						<li><a href="url">Властелинът на пръстените</a></li>
						<li><a href="url">Хари Потър</a></li>
						<li><a href="url">Да убиеш присмехулник</a></li>
						<li><a href="url">Гордост и предразсъдъци</a></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default viewSources;