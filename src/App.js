
import React, {Component} from 'react';
import Fire from "./Fire";
import Main from "./Main";



export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      component: <Fire/>,
    };
  
  }



  componentDidMount() {
    // Start counting when the page is loaded
    this.timeoutHandle = setTimeout(() => {
      // Add your logic for the transition
      this.setState({ component: <Main /> });
    }, 1700);
  }
  

  componentWillUnmount() {
    clearTimeout(this.timeoutHandle);
  }


  render() {
    return this.state.component;
  }
}
