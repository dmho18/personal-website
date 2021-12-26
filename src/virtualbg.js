import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./gameoflife.css";
import video from "./assets/video/virbackground.mp4"
import pic from "./assets/png/vb_demo.png";

export default class VirtualBackground extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: null,
      inputImage: null,
      inputBg: null,
      result: [],
      isFetching: false,
    };
    this.handleImageUpload = this.handleImageUpload.bind(this);
    this.handleBgUpload = this.handleBgUpload.bind(this);
    this.getResult = this.getResult.bind(this);
    this.upload = this.upload.bind(this);
  }

  getResult() {
    if (this.state.inputImage == null || this.state.inputBg == null) return
    //get image from an api link
    fetch("http://localhost:5000", { method: "GET" })
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            result: data["img"], //is a json
            isFetching: true,
          });
        },
        (err) => console.log(err)
      );
  }

  upload(ev, bg) {
    //upload images to an api link
    const data = new FormData();
    data.append("file", ev.files[0]);
    data.append("filename", ev.files[0].name);

    var fetch_name = "";

    if (bg) {
      fetch_name = "http://localhost:5000/upload-bg";
    } else {
      fetch_name = "http://localhost:5000/upload-img";
    }

    fetch(fetch_name, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then(
        (body) => {
          var img_URL = fetch_name + "/" + body.file;
          this.setState({ imageURL: img_URL });
        },
        (err) => console.log(err)
      );
  }

  handleImageUpload(e) {
    //set the inputImage
    this.setState({
      inputImage: URL.createObjectURL(e.target.files[0]),
    });
    this.upload(e.target, false);
  }

  handleBgUpload(e) {
    //set the inputBg
    this.setState({
      inputBg: URL.createObjectURL(e.target.files[0]),
    });
    this.upload(e.target, true);
  }

  render() {
    let imgPreview;
    let bgPreview;
    let resultImg;
    if (this.state.inputImage) {
      imgPreview = <img src={this.state.inputImage} alt="" />;
    }
    if (this.state.inputBg) {
      bgPreview = <img src={this.state.inputBg} alt="" />;
    }

    if (this.state.result.length > 0 ) {
      var str = "data:image/png;base64," + this.state.result;
      resultImg = <img src={str} />;
    }

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
              <li class="nav-item">
                <Link to={"/projects"} style={{ textDecoration: "none" }}>
                  <a class="nav-link" data-toggle="tab" href="#tab3" role="tab">
                    More Projects
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="intro">
          <h1>Create a Virtual Background</h1>
        </div>
        <div class="description" style={{ paddingBottom: "9vh" }}>
          <h2>Introduction</h2>
          <img src={pic} alt="Description"></img>
        </div>

        <div class="setUp">
          <h2>Set Up</h2>
          <div class="leftForm" style={{ display: "flex" }}>
            <div style={{ float: "left", margin: "auto" }}>
              <h3>Image</h3>
              <form>
                <div className="img_upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.handleImageUpload}
                  />
                  <div
                    style={{
                      height: "40vw",
                      width: "40vw",
                      border: "1px dashed black",
                      alignSelf: "center",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="form-group preview">{imgPreview} </div>
                  </div>
                </div>
              </form>
            </div>
            <div class="rightForm" style={{ float: "right", margin: "auto" }}>
              <form>
                <h3>Background</h3>
                <div className="bg_upload">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={this.handleBgUpload}
                  />
                  <div
                    style={{
                      height: "40vw",
                      width: "40vw",
                      border: "1px dashed black",
                      alignSelf: "center",
                      overflow: "hidden",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div className="form-group preview">{bgPreview} </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="loadResult">
            <a
              class="btn btn-lg btn-success"
              role="button"
              onClick={this.getResult}
            >
              Load Result
            </a>
          </div>
        </div>

        <div>
          <h2 class="result-name">The Result</h2>

          <div class="result">{resultImg}</div>
        </div>

        <div>
          <p>Unfortunately, I wasn't able to set up the host for the virtual background API. Instead, a video will be put here as demo when I ran it in my localhost.
            <br/>
            Both the image and background uploaded will be sent to the virtual background API. The person (if any) from the image is segmented and moved to the new background (and resized). API will then sent the resulting image to client and display.
            <br/>
            Source: <a href = "https://towardsdatascience.com/virtual-background-for-video-conferencing-using-machine-learning-dfba17d90aa9"
            target="_blank"
            rel="noopener noreferrer">Towards Data Science</a>
          </p>
          <div class="video">
            <center>
              <video controls="controls" width="800" height="600" 
                name="Game of Life Demo" src={video}></video>
            </center>
          </div>
        </div>

        <div class="ft">
          <footer class="footer">
            <p>

              You can view the source code for the virtual background API on{" "}
              <a
                href="https://github.com/dmho18/vb-api"
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