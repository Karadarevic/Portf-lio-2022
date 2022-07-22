import React from "react";
import "./App.css";
import Header from "./components/1- header/index.js";
import Profile from "./components/2- profile/index.js";
import Projects from "./components/3- projetos/index.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Projects />
    </div>
  );
}

export default App;
