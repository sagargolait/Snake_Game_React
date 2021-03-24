import React from "react";
import "./App.css";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home.js";
import Board from "./Board/Board";
import Layout from "./Layout/Layout.js";

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
