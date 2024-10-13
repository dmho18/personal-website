import React, { Component } from "react";
import pic from "./assets/png/vietnam_corner.png";
import gol_button from "./assets/png/gameoflife.png";
import gc_button from "./assets/png/graphingcal.png";
import vb_button from "./assets/png/virtualbg.png";
import pr_button from "./assets/png/predict.png";
import fb_button from "./assets/png/feedback.png";
import close_btn from "./assets/png/close-window.png"
import send_btn from "./assets/png/send.png"
import pcc_logo from "./assets/png/pcclogo.png";
import ucsd_logo from "./assets/png/ucsdlogo.png";
import carerev_logo from "./assets/png/carerev.png";
import { SERVICE_ID, TEMPLATE_ID, USER_ID } from "./Constants"


import {Link} from "react-router-dom";
import emailjs from 'emailjs-com';
import AOS from "aos";


import "./Main.css";
import "./timeline.css";


export default class InitMain extends Component {
  constructor(){
    super();
    this.expandForm = this.expandForm.bind(this);
    this.collapseForm = this.collapseForm.bind(this);
    this.sendEmail = this.sendEmail.bind(this);
  }

  expandForm (){
    document.getElementById("form-holder").style.display = "block";
    document.getElementById("fb-btn").style.display = "none";
  }
  collapseForm(){
    document.getElementById("form-holder").style.display = "none";
    document.getElementById("fb-btn").style.display = "block";
  }
  clearLastFb (){
    document.getElementById('fbText').value = ""
  }
  sendEmail(e) {
    const msg = document.getElementById("fbText").value.trim();
    e.preventDefault();    // the email won't send without it
    if(msg == ""){
      alert("Please type message before sending.");
      return
    }
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          this.collapseForm();
          this.clearLastFb();
          alert("Feeback sent. Thank you!");
      }, (error) => {
          console.log(error.text);
      });
  }
  
  render() {
    AOS.init()
    return (
      
      <div class="container">
        <head><link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/></head>
        <div class="header fixed-top">
          <h4>danhmho312@gmail.com</h4>
          <nav class="navbar">
            <ul class="nav nav-pills">
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab1" role="tab">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab2" role="tab">
                  Projects
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab3" role="tab">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#tab4" role="tab">
                  Experience
                </a>
              </li>
              <li class="nav-item">
                <Link to="/resume" style={{ textDecoration: 'none' }}>
                <a class="nav-link" data-toggle="tab" role="tab">
                  Resume
                </a>
                </Link>
              </li>

            </ul>
          </nav>
        </div>

        <div class="intro" id="tab1">
          <h1 class="welcome">Hello and Welcome,</h1>
          <p class="lead">
            <span class="big">My name is</span> <span class="bigger">Danh</span>.
            <br />
            <div class="exp">This page was made possible by React, Javascript, HTML, CSS, Bootstrap and Firebase ❤️</div>
          </p>
          <Link to={"/resume"}>
            <a class="btn btn-lg btn-success" href="" role="button">
              My Resume
            </a>
          </Link>
        </div>

        <div class="form-container">
          <button id="fb-btn" class="feedback" type="button" onClick={this.expandForm}><img src={fb_button} /></button>
          <div id = "form-holder" class="form-holder">
            <div class="close">
              <button type="button"  onClick={this.collapseForm}>
                <img src={close_btn} />
              </button>
            </div>
            <form class="form" id="form"  action="" onSubmit={this.sendEmail}>
              <div class="input-wrapper">
              <label for="fname">Appreciate any feedback to improve! 🙏 This will be an anonymous message. Or send me a hello! </label>
              </div>
              <div class="input-wrapper">
              <textarea id="fbText" name="message"></textarea>
              </div>
            <div class="send">
            <button class="send" type="submit">
              <img src={send_btn} />
            </button>
            </div>
            </form>
          </div>
        </div>

        <div class="project" id="tab2" data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="700">
        <h2 class="title3" >Projects 🔧</h2>
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
            <Link to={"/predict"}>
            <button type="button">
              <img src={pr_button} />
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


        <div class="about" id="tab3" data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="700">
          <h2 class="title">About Me 🙂</h2>
          <div class="line"></div>
          <div class="row">
            <div class="col-lg-6">
              <div class="para">
                <p>
                  👋 Greetings! I'm a passionate software developer on a mission to craft innovative solutions and bring ideas to life through code. <br />
                  📷 I love visiting new places, taking photos of the scenary and the culture. Below are some pictures I took when traveling around Vietnam.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="para">
                <p>
                  <span class="bigger">Danh Ho</span>: &#x0007B; <br />
                  &nbsp; love:&emsp;&emsp;&emsp;&nbsp;[boba, traveling, backpacking];
                  <br />
                  &nbsp;languages: &emsp;[English, Vietnamese, Mandarin, Cantonese]; <br />
                  &nbsp;countries: &emsp;[US, Vietnam, Taiwan, Malaysia, Singapore]; <br />
                  &#x0007D;
                </p>
              </div>
            </div>
          </div>
          <img src={pic} alt="Vietnam Corner"></img>
        </div>

        <div class="edu" id="tab4" >
          <h2 class="title2" data-aos="fade-left" data-aos-duration="3000">Education <span class="grey">&</span> Experience 📖</h2>
          <div class="line"></div>
          <div class="edu-tl">
          <section id="timeline">
  
            
          <a href="https://pasadena.edu" target="_blank" rel="noopener noreferrer" class="tl-item">
              <div class="tl-bg" style={{backgroundColor: "#ffcf0c"}} >
                <img class= "pcc-logo" src={pcc_logo} />
              </div>
              <div class="tl-year">
                {/* <p>2018</p> */}
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
                {/* <p>2020</p> */}
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
                {/* <p>2021 - 2023</p> */}
              </div>

              <div class="tl-content">
                <h1 class="carerev-font">CareRev<br/> Los Angeles (Remote)</h1>
                <p>
                Worked as a Support Engineer and Associate Software Engineer for 2+ years.<br/>
                Maintains the highest standards of productivity through SDLC.
                </p>
              </div>

            </a>
          </section>
          </div>


        </div>

        <div class="ft">
          <footer class="footer">
            <p>
              Made By Danh <br/>
              You can view the web source code on <a href="https://github.com/dmho18/personal-website" target="_blank" rel="noopener noreferrer">Github</a>.
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

/* export default Main; */
