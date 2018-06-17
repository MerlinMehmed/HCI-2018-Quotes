import React, { Component } from "react";
import { addPersonalQuote, getQuoteById } from "../libs/Utilities";

class AddPersonalQuote extends Component {
    constructor(props) {
        super(props);
        this.id = -1;
        this.isEdit = false;
        this.quote = {};
    }

    componentWillMount() {
        const queryString = this.props.location.search;
        if (queryString) {
            const queryParts = queryString.split("=");
            if (queryParts && queryParts.length > 1) {
                this.id = decodeURIComponent(queryParts[1]);
                const quote = getQuoteById(this.id);
                if (quote) {
                    this.isEdit = true;
                    this.quote = quote;
                }
            }
        }
    }

    addQuote(ev) {
        if (this.refs.content.value) {
            ev.preventDefault();
            addPersonalQuote(this.refs.content.value, this.id);
            window.location.href = "/userQuotes";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row form-top form-bottom">
                    <div className="col-md-6 offset-md-3">
                        <h1 className="text-center">{this.isEdit ? "Редактиране" : "Добавяне"} на лично творчество</h1>
                        <form>
                            <div className="form-group">
                                <label>*Цитат:</label>
                                <textarea id="content" ref="content" maxLength="500" placeholder="Въведи своя цитат тук" rows="3" className="form-control" required>
                                    {this.quote.content}
                                </textarea>
                            </div>
                            <div className="form-group">
                                <label>Изображение:</label>
                                <input type="file" className="quote-img" name="pic" accept="image/*" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>*Задължителни полета</label>
                            </div>
                            <button type="submit" className="btn btn-info btn-width" onClick={this.addQuote.bind(this)}>{this.isEdit ? "Запазване" : "Добавяне"}</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

}

export default AddPersonalQuote;