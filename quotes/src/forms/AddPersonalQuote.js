import React, { Component } from "react";
import { addPersonalQuote } from "../libs/Utilities";

class AddPersonalQuote extends Component {
    constructor(props) {
        super(props);
    }

    addQuote(ev) {
        if (this.refs.content.value) {
            ev.preventDefault();
            addPersonalQuote(this.refs.content.value);
            window.location.href = "/userQuotes";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row form-top form-bottom">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">Добавяне на лично творчество</h1>
                        <form>
                            <div className="form-group">
                                <label>*Цитат:</label>
                                <textarea id="content" ref="content" maxLength="500" placeholder="Въведи своя цитат тук" rows="3" className="form-control" required></textarea>
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

export default AddPersonalQuote;