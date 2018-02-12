import React, { Component } from "react";
import axios from "axios";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  componentWillMount() {
    axios.get("http://localhost:3001/api/test").then(response => {
      console.log(response.data);
    });
  }

  render() {
    return (
      <div className="App">
        <h1> My Movie App</h1>
      </div>
    );
  }
}

export default App;
