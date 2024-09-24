import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./gameoflife.css";
import pdf from "./assets/pdf/predict_rating.pdf"

export default class PredictRating extends Component {
  render() {
    return (
      <div class="container">
        <div class="header fixed-top">
          <h4>danhmho312@gmail.com</h4>
          <nav>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <a class="nav-link" data-toggle="tab" href="#tab1" role="tab">
                    Home
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="intro">
          <h1>Predict Rating</h1>
          <h2>(Python with Machine Learning Model)</h2>
        </div>

        <div class="description">
        <iframe src={pdf} width="100%" height="1500"/>
        </div>
        <div class="ft">
          <footer class="footer">
            <p>

              You can view the source code for this project on{" "}
              <a
                href="https://github.com/dmho18/Predict-Rating"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    );
  }
}