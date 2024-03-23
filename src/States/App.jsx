
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: "Dhanalakshmi",
      pass: 1323,
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.username}</h1>
        <h1>{this.state.pass}</h1>
      </div>
    );
  }
}

export default App;
