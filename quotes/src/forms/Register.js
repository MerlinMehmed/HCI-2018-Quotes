import React, { Component } from "react";

class Register extends Component {
    render() {
        return (
            <div className="row form-top form-bottom">
                <div className="col-md-6 offset-md-3">
                    <h1 className="text-center">Регистрация</h1>
                    <form>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>Име:</label>
                                <input type="text" placeholder="Въведи името си тук" className="form-control" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Фамилия:</label>
                                <input type="text" placeholder="Въведи фамилията си тук" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>*E-mail адрес:</label>
                            <input type="email" placeholder="Въведи своя e-mail адрес тук" className="form-control" required />
                        </div>
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <label>*Парола:</label>
                                <input type="password" placeholder="Въведи паролата си тук" className="form-control" required />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>*Потвърди своята парола:</label>
                                <input type="password" placeholder="Потвърди паролата си тук" className="form-control" required />
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-6 form-group">
                                <label>Рождена дата:</label>
                                <input type="date" className="form-control" />
                            </div>
                            <div className="col-md-6 form-group">
                                <label>Профилна снимка:</label>
                                <input type="file" name="pic" accept="image/*" className="form-control" />
                            </div>
                        </div>
                        <div class="row">
                            <div className="col-md-6 form-group">
                                <label>Любим цитат:</label>
                                <textarea placeholder="Въведи любимия си цитат тук" rows="3" className="form-control"></textarea>
                            </div>                            
                            <div className="col-md-6 form-group">
                                <label>Любим автор:</label>
                                <input type="text" placeholder="Въведи любимия си автор тук" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>*Задължителни полета</label>
                        </div>
                        <button type="submit" className="btn btn-info btn-width">Регистрация</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;