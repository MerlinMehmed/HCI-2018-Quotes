import React, { Component } from "react";

class AddQuote extends Component {
    constructor(props) {
        super(props);
        this.setQuotesToSession();
    }

    setQuotesToSession() {
        let storedQuotes = sessionStorage.getItem("quotes");
        if (storedQuotes == null) {
            window.sessionStorage.setItem("quotes", JSON.stringify([]));
        }
    }

    addQuote() {
        let storedQuotes = JSON.parse(sessionStorage.getItem("quotes"));
        storedQuotes.push({
            text: "Вие никога няма да можете да решите проблема, ако продължавате да мислите по същия начин, който ви е причинил този проблем.",
            author: "Алберт Айнщайн"
        });
        window.sessionStorage.setItem("quotes", JSON.stringify(storedQuotes));
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
                                <textarea maxlength="500" placeholder="Въведи своя цитат тук" rows="3" className="form-control" required></textarea>
                            </div>
                            <div className="form-group">
                                <label>*Автор:</label>
                                <input type="text" placeholder="Въведи автора на цитата тук" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>*Категория:</label>
                                <select name="category" className="form-control" required>
                                    <option value="love">Любов</option>
                                    <option value="friendship">Приятелство</option>
                                    <option value="life">Живот</option>
                                    <option value="happiness">Щастие</option>
                                    <option value="sadness">Тъга</option>
                                    <option value="time">Време</option>
                                    <option value="good">Добро</option>
                                    <option value="trust">Доверие</option>
                                    <option value="egoism">Егоизъм</option>
                                    <option value="knowledge">Знание</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Източник:</label>
                                <input type="text" placeholder="Въведи книга/списание/сайт, от който е цитата" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Изображение:</label>
                                <input type="file" className="quote-img" name="pic" accept="image/*" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>*Задължителни полета</label>
                            </div>
                            {/*<Home ref={home => this.home = home}/>*/}

                            <button type="button" className="btn btn-info btn-width" onClick={this.addQuote}>Добавяне</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddQuote;

