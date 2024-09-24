import React, { Component } from "react";
import resume1 from "./assets/png/resume1.png";
import resume2 from "./assets/png/resume2.png";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <img src={resume1}></img>
        <img src={resume2}></img>
      </div>

    );
  }
}

