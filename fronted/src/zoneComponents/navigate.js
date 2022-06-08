import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
          
            <Link className="navbar-brand" to="/">inicio</Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/createUsers">Login</Link>
                </li>
                <li className="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>
                <li cclassName="nav-item">
                  <a class="nav-link disabled">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
