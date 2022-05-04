import { Routes, Route, Link } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import About from "./components/About";

import CreateStudent from "./components/student/CreateStudent";
import EditStudent from "./components/student/EditStudent";
import ListStudent from "./components/student/ListStudent";

import CreateProfessor from "./components/professor/CreateProfessor";
import EditProfessor from "./components/professor/EditProfessor";
import ListProfessor from "./components/professor/ListProfessor";

function App() {
  function studentsDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Student
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="createStudent">
              Create Student
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="listStudent">
              List Student
            </a>
          </li>
        </ul>
      </li>
    )
  }

  function professorDropDown() {
    return (
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="/#"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Professor
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li>
            <a class="dropdown-item" href="createProfessor">
              Create Professor
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="listProfessor">
              List Professor
            </a>
          </li>
        </ul>
      </li>
    )
  }
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            CRUD
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              {studentsDropDown()}
              {professorDropDown()}
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />

        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />

        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;
