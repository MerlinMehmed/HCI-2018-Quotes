import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./views.css";

class viewAuthors extends Component {

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
				<div className="col-sm-10 view" id="authors">
					<ul>
						<li><a href="url">Алберт Айнщайн</a></li>
						<li><a href="url">Антоан дьо Сент Екзюпери</a></li>
						<li><a href="url">Волтер</a></li>
						<li><a href="url">Данте Алигиери</a></li>
						<li><a href="url">Йохан фон Гьоте</a></li>
						<li><a href="url">Марк Твен</a></li>
						<li><a href="url">Ричард Бах</a></li>
						<li><a href="url">Уилям Шекспир</a></li>
						<li><a href="url">Ърнест Милър Хемингуей</a></li>
					</ul>
				</div>
			</div>
        );
    }
}

export default viewAuthors;