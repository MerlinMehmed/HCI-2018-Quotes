import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";

class viewAuthors extends Component {
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
				<div className="col-sm-10 view" id="authors">
					<ul>
						<li><Link to="/page" className="nav-link" activeClassName="active">Алберт Айнщайн</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Антоан дьо Сент Екзюпери</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Волтер</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Данте Алигиери</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Йохан фон Гьоте</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Марк Твен</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Ричард Бах</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Уилям Шекспир</Link></li>
						<li><Link to="/page" className="nav-link" activeClassName="active">Ърнест Милър Хемингуей</Link></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default viewAuthors;