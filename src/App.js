import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Quotes from "./Quotes";
import Lamp from "./Lamp";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
  }

    handleClick = () => {
      this.setState({working: !this.state.working});
    };
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo":"App-logo-spin"} alt="logo" />
          <button onClick={this.handleClick}>Working?</button>
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <Lamp on />
        <Lamp />
        <Quotes />
      </div>
    );
  }
}

export default App;