import React, { Component } from "react";
import logo from "./logo.svg";
import DataPresenter from "./containers/DataPresenter/DataPresenter";
import "./App.css";

class App extends Component {
  render() {
    const data = Array.from({ length: 40 }, () => [
      "FR" +
        Math.floor(Math.random() * 999999)
          .toString()
          .padStart(6, 0),
      Math.floor(Math.random() * 99999999)
        .toString()
        .padStart(8, 0)
    ]);
    data.unshift(["File number", "CIF"]);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <DataPresenter data={data} />
      </div>
    );
  }
}

export default App;
