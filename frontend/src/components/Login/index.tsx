/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { loginRequest } from "../../requests/Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const login = async () => {
    let response = await loginRequest({ email, password: senha });
    console.log(response);
  };

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
                  onChange={e => setEmail(e.target.value)}
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
                  onChange={e => setSenha(e.target.value)}
                />
              </div>
              <div className="form-group">
                <br />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    login();
                  }}
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
