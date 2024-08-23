import React, { Component } from "react";
import pic from "./assets/png/vietnam_corner.png";
import gol_button from "./assets/png/gameoflife.png";
import gc_button from "./assets/png/graphingcal.png";
import vb_button from "./assets/png/virtualbg.png";

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
            <span class="big">My name is</span> <span class="bigger">Danh Ho</span>.<br /> I enjoy
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
          <h2 class="title">About Me 🙂</h2>
          <div class="line"></div>
          <div class="row">
            <div class="col-lg-6">
              <div class="para">
                <p>
                  👋 Hello there! I'm a passionate software developer on a mission to craft innovative solutions and bring ideas to life through code. <br />
                  📷 I love visiting new places, taking photos of the scenary and the culture. Below are some pictures of the country where I was born in - Vietnam.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="para">
                <p>
                  <span class="bigger">Danh Ho</span>: &#x0007B; <br />
                  &nbsp; love:&emsp;&emsp;&emsp;&nbsp;[boba, traveling, backpacking];{" "}
                  <br />
                  &nbsp; languages:&emsp;[English, Chinese, Vietnamese]; <br />
                  &nbsp; skills: &emsp;&emsp;&nbsp; [Ruby on Rails, C++, Python,
                  React]; <br />
                  &#x0007D;
                </p>
              </div>
            </div>
          </div>
          <img src={pic} alt="Vietnam Corner"></img>
        </div>

        <div class="edu" id="tab3">
          <h2 class="title2">Education <span class="grey">&</span> Experience 📖</h2>
          <div class="line"></div>
          <div class="edu-tl">
          <section id="timeline">
  
            
          <a href="https://pasadena.edu" target="_blank" rel="noopener noreferrer" class="tl-item">
              <div class="tl-bg" style={{backgroundColor: "#ffcf0c"}} >
                <img class= "pcc-logo" src={pcc_logo} />
              </div>
              <div class="tl-year">
                <p>2018</p>
              </div>

              <div class="tl-content">
                <h1 class="pcc-font">Pasadena City College <br/>(GPA: 3.7)</h1>
                
                <p>Relevant Course Works:<br />
                Java, C++  classes and projects<br/>
                </p>
              </div>

            </a>

            <a href="https://www.ucsd.edu" target="_blank" rel="noopener noreferrer" class="tl-item">
              
              <div class="tl-bg" style={{backgroundColor: "#00C6D7"}}>
                <img src={ucsd_logo} />
              </div>
              
              <div class="tl-year">
                <p>2020</p>
              </div>

              <div class="tl-content">
                <h1 class="ucsd-font">University of California, San Diego<br/> (GPA: 3.46)</h1>
                <p>Relevant Course Works:<br/>
                Advance Software Engineering, Advanced Data Struture, Machine Learning, Web Mining.
                </p>
              </div>

            </a>

            <a href="https://www.carerev.com" target="_blank" rel="noopener noreferrer" class="tl-item">
              
              <div class="tl-bg" style={{backgroundColor: "#aef2d8" }}>
                <img src={carerev_logo} />
              </div>
              
              <div class="tl-year">
                <p>2021 - 2023</p>
              </div>

              <div class="tl-content">
                <h1 class="carerev-font">CareRev</h1>
                <p>
                Worked as a Support Engineer and Associate Software Engineer for 2.5 years.<br/>
                Provided Backend implementations and patches to existing and new features.
                Main Language: Ruby on Rails.
                </p>
              </div>

            </a>
          </section>
          </div>


        </div>

        <div class="project" id="tab4">
        <h2 class="title3">Projects 🔧</h2>
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
            <Link to={"/virtualbg"}>
            <button type="button">
              <img src={vb_button} />
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
