import React from "react";
import { Link, withRouter } from "react-router-dom";
import "../App.css"

function Nav(props) {
  return (
    <div className="navigation">
      <nav className="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">       
          {/* <div class="collapse navbar-collapse" id="navbarResponsive"> */}
            <ul className="list" class="navbar-nav ml-auto">
              <li className="list"
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/">
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/services" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/services">Our
                Services
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          {/* </div> */}
      </nav>
    </div>
  );
}

export default withRouter(Nav);