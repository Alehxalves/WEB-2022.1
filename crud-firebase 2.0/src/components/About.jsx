import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

function About() {
  return (
    <div className="aboutPage">
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
        <footer>
          <Link
            to="/"
            className="nav-button"
            style={{ textDecoration: "none" }}
          >
            Home
          </Link>
        </footer>
      </main>
    </div>
  );
}

export default About;
