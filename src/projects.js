import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./gameoflife.css";

export default class Projects extends Component {
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

          </ul>
        </nav>
      </div>
      <div class="intro">
        <h1>Projects</h1>
      </div>
      <div class="description">
        <h2>Project Repositories:</h2>

        <p> 
        &emsp;&emsp;&emsp;&emsp;1. <a href="https://github.com/dmho18/mp3-player" target="_blank" rel="noopener noreferrer">MP3 Player</a> (Java) - I built a MP3 player that can store .mp3 files on user's disk. Users can play, move the playbar, create playlists or add subtitle, etc.<br/>
        &emsp;&emsp;&emsp;&emsp;2. <a href="https://github.com/Elflyn/GeekOverflow" target="_blank" rel="noopener noreferrer">Triton Deal</a> (JavaScript, React Native) - I work in a group to produce a mobile app for UCSD students to buy and sell items.<br/>
        &emsp;&emsp;&emsp;&emsp;3. <a href="https://github.com/cse112-sp20/CSE112-Neon" target="_blank" rel="noopener noreferrer">Neon Pulse</a> (JavaScript) - I contributed as a member in the production of a desktop app that enhances the experience of working remotely.<br/>

        </p>

        <div class="loadResult">
              <Link to="/">
            <a class="btn btn-lg btn-success" href="#" role="button">
              Home
            </a>
            </Link>
          </div>
        
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

