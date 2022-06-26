import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../index.css";

import FirebaseContext from "../../utils/FirebaseContext";
import FirebaseUserService from "../../services/FirebaseUserService";

const SignInPage = ({ setLogged, setShowToast, setToast }) => (
  <FirebaseContext.Consumer>
    {(firebase) => (
      <SignIn
        firebase={firebase}
        setLogged={setLogged}
        setShowToast={setShowToast}
        setToast={setToast}
      />
    )}
  </FirebaseContext.Consumer>
);

function SignIn(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [validate, setValidate] = useState({ login: "", password: "" });

  const navigate = useNavigate();

  const validateFields = () => {
    let res = true;
    setValidate({ login: "", password: "" });

    if (login === "" || password === "") {
      props.setToast({
        header: "Error!",
        body: "Please complete all required fields.",
      });
      props.setShowToast(true);
      setLoading(false);
      res = false;
      let validateObj = { login: "", password: "" };
      if (login === "") validateObj.login = "is-invalid";
      if (password === "") validateObj.password = "is-invalid";
      setValidate(validateObj);
    }

    return res;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    if (!validateFields()) return;

    FirebaseUserService.login(
      props.firebase.getAuthentication(),
      login,
      password,
      (user) => {
        if (user != null) {
          setLoading(false);
          props.firebase.setUser(user);
          props.setLogged(true);
          navigate("/listStudent");
        } else {
          setLoading(false);
          props.setToast({
            header: "Error!",
            body: "Incorrect Login and/or Password.",
          });
          props.setShowToast(true);
        }
      }
    );
  };

  const renderSubmitButton = () => {
    if (loading) {
      return (
        <div style={{ paddingTop: 20 }}>
          <button className="btn btn-primary" type="button" disabled>
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            <span style={{ marginLeft: 10 }}>Loading...</span>
          </button>
        </div>
      );
    }
    return (
      <>
        <div className="form-group" style={{ paddingTop: 20 }}>
          <input type="submit" value="Login" className="btn btn-primary" />
        </div>
      </>
    );
  };

  return (
    <div className="content__autentication" style={{ marginTop: 50 }}>
      <main style={{ width: "40%" }}>
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className={`form-control ${validate.login}`}
              value={login == null || login === undefined ? "" : login}
              name="login"
              onChange={(event) => {
                setLogin(event.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className={`form-control ${validate.password}`}
              value={password ?? ""}
              name="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          {renderSubmitButton()}
        </form>
      </main>
      <nav>
        <Link
          to="/signUp"
          className="nav-button"
          style={{ fontWeight: "bold", textDecoration: "none" }}
        >
          Sign Up
        </Link>
      </nav>
    </div>
  );
}

export default SignInPage;
