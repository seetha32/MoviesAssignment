import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import TopRated from './components/TopRated';
import Upcoming from './components/Upcoming';
import SingleMovieDetails from './components/SingleMovieDetails';
import SearchedMovie from './components/SearchedMovie';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/movie/:movieId" element={<SingleMovieDetails />} /> {/* Updated route */}
          <Route path="/search" element={<SearchedMovie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;