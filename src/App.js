import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GenerateQuote from './GenerateQuote';
import DisplayQuote from './DisplayQuote';

const sampleQuote = {
  quote: "Shoplifting is a victimless crime, like punching someone in the dark.",
   character: "Nelson Muntz",
   image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
   "characterDirection" : "Left"
  }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      working: true
    };
    this.state = {
      quote: sampleQuote
    };
  }

  handleClick = () => {
    this.setState({ working: !this.state.working });
  };

  getQuote() {
    fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.json())
      .then(data => {
        // Une fois les données récupérées, on va mettre à jour notre state avec les nouvelles données
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={this.state.working ? "App-logo" : "App-logo-spin"} alt="logo" />
          <button onClick={this.handleClick}>Working?</button>
          <br />
          <h1 className="App-title">Simpsons Quotes</h1>
        </header>
        <br/>
        <GenerateQuote selectQuote={() => this.getQuote()} />
        <DisplayQuote quote={this.state.quote} />
        <br/>
      </div>
    );
  }
}

export default App;