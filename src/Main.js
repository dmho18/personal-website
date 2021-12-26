import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ScrollToTop from "./scroll";

import Game from "./gameoflife";
import Calc from "./calc";
import InitMain from "./InitMain";
import Resume from "./resume";
import Projects from "./projects";
import VirtualBackground from "./virtualbg"

import "./Main.css";
import "./timeline.css";

export default class Main extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/projects">
            <ScrollToTop />
            <Projects />
          </Route>
          <Route path="/resume">
            <ScrollToTop />
            <Resume />
          </Route>
          <Route path="/game">
            <ScrollToTop />
            <Game />
          </Route>
          <Route path="/calc">
            <ScrollToTop />
            <Calc />
          </Route>
          <Route path="/virtualbg">
            <ScrollToTop />
            <VirtualBackground />
          </Route>
          <Route path="/">
            <ScrollToTop />
            <InitMain />
          </Route>
        </Switch>
      </Router>
    );
  }
}
