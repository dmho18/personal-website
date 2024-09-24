import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";

import ScrollToTop from "./scroll";

import Game from "./gameoflife";
import Calc from "./calc";
import InitMain from "./InitMain";
import Resume from "./resume";
import Projects from "./projects";
import VirtualBackground from "./virtualbg"
import PredictRating from "./predict";

import "./Main.css";
import "./timeline.css";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/projects" element={<><ScrollToTop/><Projects/></>}/>
          <Route path="/resume" element={<><ScrollToTop/><Resume/></>}/>
          <Route path="/game" element={<><ScrollToTop/><Game/></>}/>
          <Route path="/calc" element={<><ScrollToTop/><Calc/></>}/>
          <Route path="/virtualbg" element={<><ScrollToTop/><VirtualBackground/></>}/>
          <Route path="/predict" element={<><ScrollToTop/><PredictRating/></>}/>
          <Route path="/" element={<><ScrollToTop/><InitMain/></>}/>
        </Routes>
      </Router>
    );
  }
}
