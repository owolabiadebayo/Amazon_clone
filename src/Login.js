import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

const Login = () => {
  const history = useHistory();
  const [useremail, setUserEmail] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const loginuser = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const signupuser = (event) => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(useremail, userpassword)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="Login">
      <Link>
        <img
          src="https://upload.wikipedia.org/wikipedia/commons/thumb/a/a9/amazon_logo.svg"
          className="Login__logo"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={useremail}
            onChange={(event) => setUserEmail(event.target.value)}
            type="Email"
          />
          <h5>Password</h5>
          <input
            value={userpassword}
            onChange={(event) => setUserPassword(event.target.value)}
            type="password"
          />
          <button
            onClick={loginuser}
            type="submit"
            className="Login__signInButton"
          >
            Sign In
          </button>
        </form>
        <p>By signing-In, you agree to Amazon's terms and condition</p>
        <button onClick={signupuser} className="login_createAccount">
          Create Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
