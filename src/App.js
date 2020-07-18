import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      {/* <h1>Hey Dharmesh here Let's start making Netflix Clone</h1> */}
      
      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <Banner />

      {/* ROW */}

      <Row title="NETFLIX ORIGINALS" url={requests.netflix_originals}
      isLargeRow
      />
      <Row title="Trending Now" url={requests.trending} />
      <Row title="Top Rated" url={requests.top_rated} />
      <Row title="Action Movies" url={requests.action_movies} />
      <Row title="Comedy Movies" url={requests.comedy_movies} />
      <Row title="Horror Movies" url={requests.horror_movies} />
      <Row title="Romantic Movies" url={requests.romance_movies} />
      <Row title="Documentaries" url={requests.documentaries} />
    </div>
  );
}

export default App;
