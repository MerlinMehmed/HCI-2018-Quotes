import React, { Component } from "react";
import "./views.css";

class viewSources extends Component {
    render() {
        return (
				<div className="container">
					<div className="col-lg-12 well">
						<div className="col-sm-2">
							<div className="row">
								<button className="col-sm-12" id="button1" type="button">Автори</button>
							</div>
							<div className="row">
								<button className="col-sm-12" id="button2" type="button">Книги и списания</button>	
							</div>
							<div className="row">
								<button className="col-sm-12" id="button3" type="button">Категории</button>	
							</div>
						</div>
						<div style = "display:none" className="col-sm-10" id="authors">
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
						<div style="display:none" className="col-sm-10" id="categories">
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
							<div className="col-sm-10" id="books">
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
				</div>
        );
    }
}

export default viewSources;