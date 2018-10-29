import React, { Component } from 'react';
import Apisimpson from "./Apisimpsons"


const sampleSimpsons = {
  quote: "hola",
  character: "Nelson Muntz",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  characterDirection: false
}


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      simpsons: sampleSimpsons
    }
  
  }


  handleClick() {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
      .then(response => response.json())
      .then(data  => {
        this.setState({ simpsons: data[0]})
      })
  }

  render() {
    return (
      <div className="App">
        <Apisimpson
          quote={this.state.simpsons}
          handle={() => {this.handleClick()}}
        />
      </div>
    );
  }
}

export default App;
