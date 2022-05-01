import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import Home from "../crud/Home";
import About from "../crud/About";
import CreateStudent from "./student/CreateStudent";
import ListStudent from "./student/ListStudent";
import EditStudent from "./student/EditStudent";

function App() {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
                    CRUD
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="navitem">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link to="/createStudent" className="nav-link">
                                Criar Estudante
                            </Link>
                        </li>
                        <li className="navitem">
                            <Link to="/listStudent" className="nav-link">
                                Listar Estudante
                            </Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdownMenuLink"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown link
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="createStudent" element={<CreateStudent />} />
                <Route path="listStudent" element={<ListStudent />} />
                <Route path="editStudent/:id" element={<EditStudent />} />
            </Routes>
        </div>
    );
}

export default App;