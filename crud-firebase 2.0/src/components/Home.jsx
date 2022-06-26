import React from "react";
import { Link } from "react-router-dom";

import "../index.css";

function Home() {
  return (
    <div className="homePage">
      <main>
        <h2>Welcome to the Homepage!</h2>
        <p>You can do this, I believe in you.</p>
        <footer>
          <Link
            to="/about"
            className="nav-button"
            style={{ textDecoration: "none" }}
          >
            About
          </Link>
        </footer>
      </main>
    </div>
  );
}

export default Home;
