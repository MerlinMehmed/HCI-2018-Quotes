import React, { Component } from "react";

class Login extends Component {
    login(e) {
        e.preventDefault();
        sessionStorage.setItem("username", "ПоМЕло");
        window.location.href = "/";
    }

    render() {
        return (
            <div className="row form-top">
                <div className="col-md-4 offset-md-4">
                    <h1 className="text-center">Вписване</h1>
                    <div>
                        <form>
                            <div className="form-group">
                                <label>E-mail адрес:</label>
                                <input type="email" placeholder="Въведи своя e-mail адрес тук" className="form-control" required />
                            </div>
                            <div className="form-group">
                                <label>Парола:</label>
                                <input type="password" placeholder="Въведи паролата си тук" className="form-control" required />
                            </div>
                            <button className="btn btn-info btn-width" onClick={this.login}>Вход</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;