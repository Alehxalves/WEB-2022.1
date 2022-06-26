import { Routes, Route, Link, useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";

import MyToast from "./utils/MyToast";

import Home from "./components/Home";
import About from "./components/About";
import SignIn from "./components/autentication/SignIn";
import SignUp from "./components/autentication/SignUp";

import CreateStudent from "./components/student/CreateStudent";
import EditStudent from "./components/student/EditStudent";
import ListStudent from "./components/student/ListStudent";

import CreateProfessor from "./components/professor/CreateProfessor";
import EditProfessor from "./components/professor/EditProfessor";
import ListProfessor from "./components/professor/ListProfessor";

import FirebaseContext from "./utils/FirebaseContext";
import FirebaseUserService from "./services/FirebaseUserService";

const AppPage = () => (
  <FirebaseContext.Consumer>
    {(firebase) => <App firebase={firebase} />}
  </FirebaseContext.Consumer>
);

function App(props) {
  // eslint-disable-next-line no-unused-vars
  const [logged, setLogged] = useState(false);
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({ header: "", body: "" });

  const logout = () => {
    FirebaseUserService.logout(props.firebase.getAuthentication(), (res) => {
      if (res) {
        props.firebase.setUser(null);
        setLogged(false);
        navigate("/");
      }
    });
  };

  const renderLoginButtonLogout = () => {
    if (props.firebase.getUser() != null) {
      return (
        <div style={{ marginRight: 20, display: "flex", alignItems: "center", color:'white' }}>
          <span style={{ marginRight: 5 }}>Hello, </span>
          <span style={{ fontWeight: "bold" }}>
            {props.firebase.getUser().email}
          </span>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => logout()}
            style={{ marginLeft: 20 }}
          >
            Logout
          </button>
        </div>
      );
    }
    return;
  };

  const renderToast = () => {
    return (
      <MyToast
        show={showToast}
        header={toast.header}
        body={toast.body}
        setShowToast={setShowToast}
        bg="secondary"
      />
    );
  };

  function studentsDropDown() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Student
        </a>
        <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createStudent" className="nav-link">
              Create Student
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listStudent" className="nav-link">
              List Student
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  function professorDropDown() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul className="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
          <li className="navitem">
            <Link to="/createProfessor" className="nav-link">
              Create Professor
            </Link>
          </li>
          <li className="navitem">
            <Link to="/listProfessor" className="nav-link">
              List Professor
            </Link>
          </li>
        </ul>
      </li>
    );
  }

  function asideAutentication() {
    if (!logged) {
      return (
        <aside style={{display:'flex'}}>
          <li className="nav-item" style={{fontWeight:'bold'}}>
            <Link to="/signIn" className="nav-link">
              Sign In
            </Link>
          </li>
          <li className="nav-item" style={{fontWeight:'bold'}}>
            <Link to="/signUp" className="nav-link">
              Sign Up
            </Link>
          </li>
        </aside>
      );
    }
  }
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
            CRUD
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              {studentsDropDown()}
              {professorDropDown()}
            </ul>
            <ul className="navbar-nav" style={{float:'right'}}>
              {asideAutentication()}
            </ul>
          </div>
        </div>
        {renderToast()}
        {renderLoginButtonLogout()}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route
          path="signIn"
          element={
            <SignIn
              setLogged={setLogged}
              setShowToast={setShowToast}
              setToast={setToast}
            />
          }
        />

        <Route
          path="signUp"
          element={
            <SignUp
              setLogged={setLogged}
              setShowToast={setShowToast}
              setToast={setToast}
            />
          }
        />

        <Route path="createStudent" element={<CreateStudent setShowToast={setShowToast} setToast={setToast} />} />
        <Route path="listStudent" element={<ListStudent setShowToast={setShowToast} setToast={setToast} />} />
        <Route path="editStudent/:id" element={<EditStudent setShowToast={setShowToast} setToast={setToast} />} />

        <Route path="createProfessor" element={<CreateProfessor setShowToast={setShowToast} setToast={setToast} />} />
        <Route path="listProfessor" element={<ListProfessor setShowToast={setShowToast} setToast={setToast} />} />
        <Route path="editProfessor/:id" element={<EditProfessor setShowToast={setShowToast} setToast={setToast} />} />
      </Routes>
    </div>
  );
}

export default AppPage;
