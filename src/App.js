import React from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import requests from "./requests";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row title="Trending Now" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

// API key
// 04f89ee403e12fd795090eb7725cf321

// Example API request ( checkon postman)
// https://api.themoviedb.org/3/movie/550?api_key=04f89ee403e12fd795090eb7725cf321
