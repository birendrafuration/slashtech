import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchPage from './pages/Search';
import FavouritesPage from './pages/Favourites';


const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <nav className="mb-4">
          <Link to="/" className="mr-4">Search</Link>
          <Link to="/favourites">Favourites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
