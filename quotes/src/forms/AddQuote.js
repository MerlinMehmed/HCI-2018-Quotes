import React, { Component } from "react";

class AddQuote extends Component {
    render() {
        return (
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
                        <button type="submit" className="btn btn-info btn-width">Добавяне</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddQuote;

