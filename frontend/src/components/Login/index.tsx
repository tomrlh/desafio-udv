/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Login = () => {
  return (
    <div id="login">
      <h3 className="text-center text-white pt-5">Login form</h3>
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form id="login-form" className="form" action="" method="post">
                <h3 className="text-center text-info">Desafio UDV</h3>
                <div className="form-group">
                  <label htmlFor="username" className="text-info">
                    Email:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password" className="text-info">
                    Senha:
                  </label>
                  <br />
                  <input
                    type="text"
                    name="password"
                    id="password"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <br />
                  <input
                    type="submit"
                    name="submit"
                    className="btn btn-info btn-md"
                    value="Entrar"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
