import React from "react";
import './style.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <span class="mb-1 h1">Markki Meyer</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end pe-4" id="navbarSupportedContent">
        <ul class="nav navbar-nav navbar-right ml-auto">
          <li>
            <Link className="nav-link"
              to="/Home"
            >
              About
</Link>
          </li>

            <li class="nav-item">

              <Link className="nav-link"
                to="/Gallery"
              >
                Projects
              </Link>
            </li>
            <li class="nav-item">



              <Link className="nav-link"
                to="/Contact"
              >
                Contact
</Link>
            </li>
          </ul>
        </div>
    </nav >
  );
}

export default Nav;
