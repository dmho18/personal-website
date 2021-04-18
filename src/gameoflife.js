import React, {Component} from 'react';
import {Link} from "react-router-dom";
import "./gameoflife.css";
import pic from "./assets/png/gol.png";
import video from "./assets/video/gameoflife.mov"


export default class Game extends Component {

  render(){
  return (
    <div class="container">
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
            <li class="nav-item">
            <Link to={"/projects"} style={{ textDecoration: 'none' }}>
              <a class="nav-link" data-toggle="tab" role="tab">
                More Projects
              </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="intro">
        <h1>Conway's Game Of Life</h1>
      </div>
      <div class="description">
        <h2>What is Game of Life?</h2>
        <p>&emsp;&emsp;The <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">Game of Life</a>, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970. It is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. </p>
        <h2>How to Play</h2>
        <img src={pic} alt="Game of Life"></img>
        <center><p><span class="bigger">Note:</span> spacebar is pressed to pause/play</p></center>
        <h2>The Rules</h2>
        <p>
        &emsp;&emsp;&emsp;&emsp;The <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank" rel="noopener noreferrer">universe</a> of the Game of Life is an infinite, two-dimensional orthogonal grid of square cells, each of which is in one of two possible states, live or dead, (or populated and unpopulated, respectively). Every cell interacts with its eight neighbours, which are the cells that are horizontally, vertically, or diagonally adjacent. At each step in time, the following transitions occur:<br />

        &emsp;&emsp;&emsp;&emsp;1. Any live cell with fewer than two live neighbours dies, as if by underpopulation.<br/>
        &emsp;&emsp;&emsp;&emsp;2. Any live cell with two or three live neighbours lives on to the next generation.<br/>
        &emsp;&emsp;&emsp;&emsp;3. Any live cell with more than three live neighbours dies, as if by overpopulation.<br/>
        &emsp;&emsp;&emsp;&emsp;4. Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.<br/>
        </p>
        <h2>Demo</h2>
        <div class="video">
          <center>
        <video controls="controls" width="800" height="600" 
       name="Game of Life Demo" src={video}></video></center>
       </div>
       <div class="ft">
          <footer class="footer">
            <p>
              Unfortunately, this app hasn't been built.
              
              <br />You can view the source code on <a href="https://github.com/dmho18/gameoflife2" target="_blank" rel="noopener noreferrer">Github</a>.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
}

// export default Game;
