import React, { Component } from "react";

class AddPersonalQuote extends Component {
    constructor(props) {
        super(props);
        this.setQuotesToSession();
    }

    setQuotesToSession() {
        let storedQuotes = sessionStorage.getItem("personal");
        if(storedQuotes == null) {
            window.sessionStorage.setItem("personal", JSON.stringify([]));
        }
    }

    addQuote() {
        let storedQuotes = JSON.parse(sessionStorage.getItem("personal"));
        storedQuotes.push({
            text:"Вие никога няма да можете да решите проблема, ако продължавате да мислите по същия начин, който ви е причинил този проблем.",
            author:sessionStorage.getItem("username")});
        window.sessionStorage.setItem("personal", JSON.stringify(storedQuotes));
    }

    render() {
        return (
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
                        <button type="submit" className="btn btn-info btn-width" onClick={this.addQuote}>Добавяне</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default AddPersonalQuote;