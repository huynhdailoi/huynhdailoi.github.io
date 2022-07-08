import React, { useRef, useState } from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import Input from "./../../Input/Input";

function Login() {
  const [message, setMessage] = useState("");

  const userNameRef = useRef();
  const passwordRef = useRef();
  const navigation = useNavigate();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const username = userNameRef.current.value;
    const password = passwordRef.current.value;
    if (password === "123" && username === "admin") {
      navigation("/home");
    } else {
      setMessage("USER NAME, PASSWORD WRONG");
    }
  };

  return (
    <>
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center">
          <div className="col-sm-8 col-lg-5">
            <div className="card bg-primary">
              <div className="card-header text-white">
                <h4 className="card-title mb-0">
                  <i className="fas fa-th"></i> Login
                </h4>
              </div>

              <div className="card-body bg-white rounded-bottom">
                <p className="text-center text-danger">{message}</p>
                <form onSubmit={formSubmitHandler}>
                  <Input
                    labelSize="4"
                    inputRef={userNameRef}
                    maxLength="50"
                    label="Username"
                    id="txtUsername"
                    type="text"
                  />
                  <Input
                    labelSize="4"
                    inputRef={passwordRef}
                    maxLength="10"
                    label="Password"
                    id="txtPassword"
                    type="password"
                  />

                  <div className="row">
                    <div className="offset-sm-4 col-auto">
                      <button type="submit" className="btn btn-primary">
                        Sign in
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
