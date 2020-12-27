import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./gameoflife.css";

export default class Projects extends Component {
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

          </ul>
        </nav>
      </div>
      <div class="intro">
        <h1>Projects</h1>
      </div>
      <div class="description">
        <h2>Project Repository:</h2>

        <p> 
        &emsp;&emsp;&emsp;&emsp;1. <a href="https://github.com/dmho18/mp3-player" target="_blank" rel="noopener noreferrer">MP3 Player</a> - I built a MP3 player that can store .mp3 files on user's disk. Users can play, drag playbar, create playlists or add subtitle, etc.<br/>
        &emsp;&emsp;&emsp;&emsp;2. <a href="https://github.com/Elflyn/GeekOverflow" target="_blank" rel="noopener noreferrer">Triton Deal</a> - I work in a group to produce a mobile app for UCSD students to buy and sell items.<br/>
        &emsp;&emsp;&emsp;&emsp;3. <a href="https://github.com/cse112-sp20/CSE112-Neon" target="_blank" rel="noopener noreferrer">Neon Pulse</a> - I contributed as a member in the production of a desktop app that enhances the experience of working remotely.<br/>
        &emsp;&emsp;&emsp;&emsp;4. <a href="https://github.com/dmho18/Predict-Rating" target="_blank" rel="noopener noreferrer">Predict Rating</a> - I applied Bernoulli Naive Bayes model to a review dataset to predict the rating of the review based on the given text.<br/>

        </p> 
        
       <div class="ft">
          <footer class="footer">
            <p>
                Made by Danh Ho.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
}

