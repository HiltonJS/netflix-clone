import React from "react";
import Row from "./components/row/Row.component";
import requests from "./Request";

import "./App.css";
import Banner from "./components/row/banner/banner.component";
import NavBar from "./components/navbar/navbar.component";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.featchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fecthTopRated} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Action Moives" fetchUrl={requests.fetchActionMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />{" "}
      <Row title="Documentaries" fetchUrl={requests.fetchActionDocumentaries} />
    </div>
  );
}

export default App;
