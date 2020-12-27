import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Fire.css";

const status = "Today Theme: ";


export default class Fire extends Component {


  getDate(){
    var today = new Date();
    today = today.getDay();
    return today;
  }


  updateLevel() {
    var frost;
    var fire_main;
    var fire;
    if (this.getDate() == 1) {
      ReactDOM.findDOMNode(this.refs.fire).style.display = "none";
      ReactDOM.findDOMNode(this.refs.sparks).style.display = "none";
      frost = ReactDOM.findDOMNode(this.refs.frost).style;
      ReactDOM.findDOMNode(this.refs.snowflakes).style.display = "block";
      frost.display = "block";
      frost.width = "100%";
      frost.height = "100%";
      ReactDOM.findDOMNode(this.refs.status).innerHTML = status + "Feeling Monday 😭";
    } else if (this.getDate() == 2) {
      ReactDOM.findDOMNode(this.refs.fire).style.display = "none";
      ReactDOM.findDOMNode(this.refs.sparks).style.display = "none";
      frost = ReactDOM.findDOMNode(this.refs.frost);
      frost.style.display = "block";
      frost.style.width = "75%";
      frost.style.height = "75%";
      ReactDOM.findDOMNode(this.refs.snowflakes).style.display = "none";
      ReactDOM.findDOMNode(this.refs.status).innerHTML = status + "Feeling Tuesday 😟";
    } else if (this.getDate() == 3) {
      ReactDOM.findDOMNode(this.refs.fire).style.display = "none";
      ReactDOM.findDOMNode(this.refs.sparks).style.display = "none";

      ReactDOM.findDOMNode(this.refs.frost).style.display = "block";
      ReactDOM.findDOMNode(this.refs.frost_left).style.display = "none";
      ReactDOM.findDOMNode(this.refs.frost_right).style.display = "none";
      ReactDOM.findDOMNode(this.refs.frost_bottom).style.display = "none";
      frost = ReactDOM.findDOMNode(this.refs.frost_main).style;
      frost.display = "block";
      frost.width = "75%";
      frost.height = "75%";

      ReactDOM.findDOMNode(this.refs.snowflakes).style.display = "none";
      ReactDOM.findDOMNode(this.refs.status).innerHTML = status + "Feeling Wednesday 👩‍💻";
    } else if (this.getDate() == 4) {
      ReactDOM.findDOMNode(this.refs.frost).style.display = "none";
      ReactDOM.findDOMNode(this.refs.snowflakes).style.display = "none";
      ReactDOM.findDOMNode(this.refs.sparks).style.display = "none";

      ReactDOM.findDOMNode(this.refs.fire).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_left).style.display = "none";
      ReactDOM.findDOMNode(this.refs.fire_right).style.display = "none";
      ReactDOM.findDOMNode(this.refs.fire_bottom).style.display = "none";
      fire_main = ReactDOM.findDOMNode(this.refs.fire_main).style;
      fire_main.display = "block";
      fire_main.width = "75%";
      fire_main.height = "75%";
      ReactDOM.findDOMNode(this.refs.status).innerHTML = status + "Feeling Thrusday 😴";
    } else if (this.getDate() == 5) {
      ReactDOM.findDOMNode(this.refs.frost).style.display = "none";
      ReactDOM.findDOMNode(this.refs.snowflakes).style.display = "none";
      ReactDOM.findDOMNode(this.refs.sparks).style.display = "none";

      fire = ReactDOM.findDOMNode(this.refs.fire).style;
      fire.display = "block";
      fire.width = "75%";
      fire.height = "75%";
      ReactDOM.findDOMNode(this.refs.fire_left).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_right).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_bottom).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_main).style.display = "block";
      ReactDOM.findDOMNode(this.refs.status).innerHTML = status + "Feeling Friday 💃";
    } else {
      ReactDOM.findDOMNode(this.refs.frost).style.display = "none";
      ReactDOM.findDOMNode(this.refs.snowflakes).style.display = "none";
      ReactDOM.findDOMNode(this.refs.sparks).style.display = "block";

      fire = ReactDOM.findDOMNode(this.refs.fire).style;
      fire.display = "block";
      fire.width = "100%%";
      fire.height = "100%%";
      ReactDOM.findDOMNode(this.refs.fire_left).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_right).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_bottom).style.display = "block";
      ReactDOM.findDOMNode(this.refs.fire_main).style.display = "block";

      var s =  status + "Feeling "
      if(this.getDate() == 6){
          s += "Saturday 🎉";
        //   ReactDOM.findDOMNode(this.refs.emo).style.content = "🎉"
      }
      else{
          s += "Sunday 😌";
      }
      ReactDOM.findDOMNode(this.refs.status).innerHTML = s;
    //   ReactDOM.findDOMNode(this.refs.level).innerHTML = "Maximum Level";
    }
    // ReactDOM.findDOMNode(this.refs.status).innerHTML = this.getDate();
  }
  componentDidMount() {
    this.updateLevel();
  }

  render() {
    return (
      <html>
        <body>
          <div className="condition">
            <div className="snowflakes" ref="snowflakes" aria-hidden="true">
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
              <div className="snowflake">❅</div>
              <div className="snowflake">❆</div>
            </div>

            <div className="sparks" ref="sparks" aria-hidden="true">
              <div className="spark">`</div>
              <div className="spark">.</div>
              <div className="spark">`</div>
              <div className="spark">.</div>
              <div className="spark">`</div>
              <div className="spark">.</div>
              <div className="spark">`</div>
              <div className="spark">.</div>
              <div className="spark">`</div>
              <div className="spark">.</div>
              <div className="spark">`</div>
              <div className="spark">.</div>
              <div className="spark">`</div>
              <div className="spark">.</div>
            </div>

            <div className="wrapper">
              <div className="fire" ref="fire">
                <div className="fire-left" ref="fire_left">
                  <div className="main-fire"></div>
                  <div className="particle-fire"></div>
                </div>
                <div className="fire-main" ref="fire_main">
                  <div className="main-fire"></div>
                  <div className="particle-fire"></div>
                </div>

                <div className="fire-right" ref="fire_right">
                  <div className="main-fire"></div>
                  <div className="particle-fire"></div>
                </div>

                <div className="fire-bottom" ref="fire_bottom">
                  <div className="main-fire"></div>
                </div>
              </div>

              <div className="frost" ref="frost">
                <div className="frost-left" ref="frost_left">
                  <div className="main-frost"></div>
                  <div className="particle-frost"></div>
                </div>
                <div className="frost-main" ref="frost_main">
                  <div className="main-frost"></div>
                  <div className="particle-frost"></div>
                </div>

                <div className="frost-right" ref="frost_right">
                  <div className="main-frost"></div>
                  <div className="particle-frost"></div>
                </div>

                <div className="frost-bottom" ref="frost_bottom">
                  <div className="main-frost"></div>
                </div>
              </div>
            </div>

            <div className="status">
              <h5 ref="status">Current Status: Freezing </h5>
            </div>
          </div>
        </body>
      </html>
    );
  }
}
