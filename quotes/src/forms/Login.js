import React, { Component } from "react";

class Login extends Component {
    login(e) {
        if (this.refs.email.validity.valid && this.refs.password.validity.valid) {
            e.preventDefault();
            const emailSections = this.refs.email.value.split("@");
            let username = "ПоМЕло";
            if (emailSections && emailSections.length > 0) {
                username = emailSections[0];
            }
            sessionStorage.setItem("username", username);
            window.location.href = "/";
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row form-top">
                    <div className="col-md-4 offset-md-4">
                        <h1 className="text-center">Вписване</h1>
                        <div>
                            <form ref="form">
                                <div className="form-group">
                                    <label>E-mail адрес:</label>
                                    <input ref="email" type="email" placeholder="Въведи своя e-mail адрес тук" className="form-control" required />
                                </div>
                                <div className="form-group">
                                    <label>Парола:</label>
                                    <input ref="password" type="password" placeholder="Въведи паролата си тук" className="form-control" required />
                                </div>
                                <button className="btn btn-info btn-width" onClick={this.login.bind(this)}>Вход</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;