import React, { Component } from "react";
import axios from "axios";
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
      quote: null
    };
  }

  componentDidMount() {
    setTimeout(
     () => this.getQuote(), 1000
    )

  }

  getQuote() {
    axios
    .get("https://thesimpsonsquoteapi.glitch.me/quotes?count=num")
      .then(response => response.data)
      .then(data => {
        this.setState({
          quote: data[0],
        });
      });
  }

  render() {
    return (
      <div className="App">
        <br/>
        <GenerateQuote selectQuote={() => this.getQuote()} />
        { 
          this.state.quote 
          ? <DisplayQuote quote={this.state.quote} />
          : <p className="noData">NO DATA</p>
        }
        <br/>
      </div>
    );
  }
}

export default App;