// import "./pinterestcomponents/styles/App.css";
import './pinterestcomponents/styles/normalise.css';
import React from "react";
import Header from "./pinterestcomponents/Header";
import FinalBoard from './components/FinalBoard.js';


function App() {
  return (
    <div className="app">
      <Header  />
      <FinalBoard/>
    </div>
  );
}

export default App;
