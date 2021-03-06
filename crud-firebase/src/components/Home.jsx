import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";

import FirebaseUserService from "../services/FirebaseUserService";
import FirebaseContext from "../utils/FirebaseContext";

import MyToast from "../utils/MyToast";

const HomePage = (props) => (
  <FirebaseContext.Consumer>
    {(firebase) => <Home firebase={firebase} setLogged={props.setLogged} />}
  </FirebaseContext.Consumer>
);
function Home(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

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
          setShowToast(true);
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
          <input type="submit" value="Sign In" className="btn btn-primary" />
        </div>
      </>
    );
  };

  const renderToast = () => {
    return (
      <MyToast
        show={showToast}
        header="Error!"
        body="Incorrect Login and/or Password."
        setShowToast={setShowToast}
        bg="light"
      />
    );
  };

  return (
    <div className="content__login" style={{ marginTop: 50 }}>
      {renderToast()}
      <main style={{ width: "40%" }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
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
              className="form-control"
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
        <Link to="/about" className="nav-link">
          About
        </Link>
      </nav>
    </div>
  );
}

export default HomePage;
