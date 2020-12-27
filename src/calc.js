
import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./gameoflife.css";
import pic from "./assets/png/cal.png";
import video from "./assets/video/graphingcal.mov"

export default class Calc extends Component {
  render(){
  return (
    <div class="container">
      <div class="header fixed-top">
      <h4>dmho@ucsd.edu</h4>
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
              <a class="nav-link" data-toggle="tab" href="#tab3" role="tab">
                More Projects
              </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div class="intro">
        <h1>Graphing Calculator</h1>
      </div>
      <div class="description">
        <h2>How to Use</h2>
        <img src={pic} alt="Graphing Calculator"></img>
        <div title>
        <h2>The Flow</h2>
        </div>
        <p>

        &emsp;&emsp;&emsp;&emsp;1. Press ENTER and fill in the equation. For now, every character need to be separated by space. <br/>
        &emsp;&emsp;&emsp;&emsp;2. Press ENTER again. The equation will be saved and displayed on the graph panel and side menu.<br/>
        &emsp;&emsp;&emsp;&emsp;3. Move mouse to check point (x, y).<br/>
        &emsp;&emsp;&emsp;&emsp;4. Press Z to zoom in, O to zoom out.<br/>
        &emsp;&emsp;&emsp;&emsp;5. Press on the equation from the list to select that equation.<br/>
        </p>
        <h2>How It Works</h2>
        <p>
        &emsp;&emsp;&emsp;&emsp;The input string will be processed such that:<br/>
        &emsp;&emsp;&emsp;&emsp;- Each character will be assigned a meaningful label.<br/>
        &emsp;&emsp;&emsp;&emsp;- They will be put in a queue.<br/>
        &emsp;&emsp;&emsp;&emsp;- Perform <a href="https://en.wikipedia.org/wiki/Shunting-yard_algorithm" target="_blank" rel="noopener noreferrer">Shunting Yard</a> on the queue.<br/>
        &emsp;&emsp;&emsp;&emsp;- Perfom <a href="https://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank" rel="noopener noreferrer">Reverse Polish Notation</a> (RPN) on the queue.<br/>
        &emsp;&emsp;&emsp;&emsp;- Every point on the grid will be evaluated by RPN until a graph is formed.<br/>

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
              
              <br />You can view the source code on <a href="https://github.com/dmho18/graphingCal" target="_blank" rel="noopener noreferrer">Github</a>.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
}

