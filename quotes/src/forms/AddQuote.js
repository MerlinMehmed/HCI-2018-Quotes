import React, { Component } from "react";
import { addStoredQuote } from "../libs/Utilities";

class AddQuote extends Component {
    constructor(props) {
        super(props);
    }

    addQuote(ev) {
        if (this.refs.content.value && this.refs.author.value) {
            ev.preventDefault();
            addStoredQuote(this.refs.content.value, this.refs.author.value, this.refs.category.value, this.refs.source.value);
            window.location.href = "/";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row form-top form-bottom">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">Добавяне на цитат</h1>
                        <form>
                            <div className="form-group">
                                <label>*Цитат:</label>
                                <textarea ref="content" maxlength="500" placeholder="Въведи своя цитат тук" rows="3" className="form-control" required></textarea>
                            </div>
                            <div className="form-group">
                                <label>*Автор:</label>
                                <input ref="author" type="text" placeholder="Въведи автора на цитата тук" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>*Категория:</label>
                                <select ref="category" name="category" className="form-control" required>
                                    <option value="Любов">Любов</option>
                                    <option value="Приятелство">Приятелство</option>
                                    <option value="Живот">Живот</option>
                                    <option value="Щастие">Щастие</option>
                                    <option value="Тъга">Тъга</option>
                                    <option value="Време">Време</option>
                                    <option value="Добро">Добро</option>
                                    <option value="Доверие">Доверие</option>
                                    <option value="Егоизъм">Егоизъм</option>
                                    <option value="Знание">Знание</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Източник:</label>
                                <input ref="source" type="text" placeholder="Въведи книга/списание/сайт, от който е цитата" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Изображение:</label>
                                <input type="file" className="quote-img" name="pic" accept="image/*" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>*Задължителни полета</label>
                            </div>
                            <button type="submit" className="btn btn-info btn-width" onClick={this.addQuote.bind(this)}>Добавяне</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddQuote;

