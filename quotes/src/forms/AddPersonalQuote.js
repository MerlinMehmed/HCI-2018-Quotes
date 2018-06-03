import React, { Component } from "react";

class AddPersonalQuote extends Component {

    addPersonalQuote() {
        console.log("first");

        let quote = {
            "personalQuotes": [
            {"content": this.refs.content.value}
            ]
        };  
        console.log("writing");
        let quoteJson = JSON.stringify(quote);
        console.log("bla " + quoteJson);
        
        var storage = window.localStorage;

        var quotes = JSON.parse(storage.getItem("quotes"));
        if(quotes != null) {
            quotes['personalQuotes'].push(quoteJson);    
        }
        storage.setItem("quotes", quoteJson);

        console.log(quotes.toString());
        
        console.log("done");

        var qu = storage.getItem("quotes");

        console.log("we got: " + qu.toString());
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
                        <button type="submit" className="btn btn-info btn-width" onClick={this.addPersonalQuote.bind(this)}>Добавяне</button>
                    </form>
                </div>
            </div>
        );
    }

}

export default AddPersonalQuote;