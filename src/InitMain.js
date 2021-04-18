import React, { Component } from "react";
import pic from "./assets/png/vietnam_corner.png";
import gol_button from "./assets/png/gameoflife.png";
import gc_button from "./assets/png/graphingcal.png";
import pcc_logo from "./assets/png/pcclogo.png";
import ucsd_logo from "./assets/png/ucsdlogo.png";
import carerev_logo from "./assets/png/carerev.png";

import {Link} from "react-router-dom";

import "./Main.css";
import "./timeline.css";

export default class InitMain extends Component {
  render() {
    return (
      <div class="container">
        <div class="header fixed-top">
          <h4>danhmho312@gmail.com</h4>

          <nav>
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab1" role="tab">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  data-toggle="dropdown"
                  href="#tab2"
                  role="tab"
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab3" role="tab">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab4" role="tab">
                  Projects
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="intro" id="tab1">
          <h1 class="welcome">Hello and Welcome,</h1>
          <p class="lead">
            My name is <span class="bigger">Danh Ho</span>.<br /> I enjoy
            building beautiful and highly functional applications, websites or
            any programming projects.
          </p>
            <Link to={"/resume"}>
            <a class="btn btn-lg btn-success" href="" role="button">
              My Resume
            </a>
            </Link>
        </div>

        <div class="about" id="tab2">
          <h2 class="title">About Me</h2>
          <div class="line"></div>
          <div class="row">
            <div class="col-lg-6">
              <div class="para">
                <p>
                  The interest in coding did not occur to me until I immigrated
                  to the U.S. <br />
                  It is the curiousity toward computer that has pushed me to
                  pursue programming.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="para">
                <p>
                  <span class="bigger">Danh Ho</span>: &#x0007B; <br />
                  &nbsp; love:&emsp;&emsp;&emsp;&nbsp;[boba, backpacking];{" "}
                  <br />
                  &nbsp; language:&emsp;[english, chinese, vietnamese]; <br />
                  {/* &nbsp; status: &emsp;&emsp;[seeking full-time]; <br /> */}
                  &nbsp; skills: &emsp;&emsp;&nbsp; [C++, Python, Java, Node.js,
                  React]; <br />
                  &#x0007D;
                </p>
              </div>
            </div>
          </div>
          <img src={pic} alt="Vietnam Corner"></img>
        </div>

        <div class="edu" id="tab3">
          <h2 class="title2">Education <span class="grey">&</span> Experience</h2>
          <div class="line"></div>
          <div class="edu-tl">
          <section id="timeline">
  
            <div class="tl-item">
              
              <div class="tl-bg" style={{backgroundColor: "#ffcf0c"}} >
                <img class= "pcc-logo" src={pcc_logo} />
              </div>
              <div class="tl-year">
                <p>2015 - 2018</p>
              </div>

              <div class="tl-content">
                <h1>Pasadena City College <br/>(GPA: 3.7)</h1>
                <p>Course Works:<br />
                Mostly GEs, and some entry-level C++,<br/>
                Java classes.
                </p>
              </div>

            </div>

            <div class="tl-item">
              
              <div class="tl-bg" style={{backgroundColor: "#00C6D7"}}>
                <img src={ucsd_logo} />
              </div>
              
              <div class="tl-year">
                <p class="f2 heading--sanSerif">2018 - 2020</p>
              </div>

              <div class="tl-content">
                <h1>University of California, San Diego<br/> (GPA: 3.46)</h1>
                <p>Relevant Course Works:<br/>
                Advance Software Engineering, Advanced Data Struture, Machine Learning, Web Mining.
                </p>
              </div>

            </div>

            <div class="tl-item">
              
              <div class="tl-bg" style={{backgroundColor: "#aef2d8" }}>
                <img src={carerev_logo} />
              </div>
              
              <div class="tl-year">
                <p class="f2 heading--sanSerif">2021 - Now</p>
              </div>

              <div class="tl-content">
                <h1>CareRev</h1>
                <p>
                Interface with staffs/clients on a daily basis, providing technological expertise. <br/>
                Help tinker features in company's tool and web application.
                </p>
              </div>

            </div>
          </section>
          </div>


        </div>

        <div class="project" id="tab4">
        <h2 class="title3">Projects I've built</h2>
        <div class="line"></div>

          <div class="buttons">
              <Link to={"/game"}>
            <button  type="button">
              <img src={gol_button} />
            </button>
            </Link>
            <Link to={"/calc"}>
            <button class="button2" type="submit" name="gc" value="gc">
              <img src={gc_button} />
            </button>
            </Link>
          </div>

          <div class="more">
              <Link to="/projects">
            <a class="btn btn-lg btn-success" href="#" role="button">
              See More
            </a>
            </Link>
          </div>
        </div>

        <div class="ft">
          <footer class="footer">
            <p>
              This is not the final version and might be updated in the future.
              <br />
              You can view the web source code on <a href="https://github.com/dmho18/personal-website" target="_blank" rel="noopener noreferrer">Github</a>.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

/* export default Main; */
