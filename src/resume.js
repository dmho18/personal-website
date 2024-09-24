import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./gameoflife.css";
import resume1 from "./assets/png/resume1.png";
import resume2 from "./assets/png/resume2.png";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <div class="header fixed-top">
          <h4>danhmho312@gmail.com</h4>
            <nav>
              <ul class="nav nav-pills">
                <li class="nav-item">
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <a class="nav-link" data-toggle="tab" href="#tab1" role="tab">
                    Home
                  </a>
                  </Link>
                </li>
              </ul>
            </nav>
        </div>

        <img src={resume1}></img>
        <img src={resume2}></img>
      </div>

    );
  }
}

