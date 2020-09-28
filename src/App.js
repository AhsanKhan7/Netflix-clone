import React from "react";
import Row from "./Row";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Netflix</h1>
      <Row title="Netflix Originals" />
      <Row title="Trending Now" />
    </div>
  );
}

export default App;

// API key
// 04f89ee403e12fd795090eb7725cf321

// Example API request ( checkon postman)
// https://api.themoviedb.org/3/movie/550?api_key=04f89ee403e12fd795090eb7725cf321
