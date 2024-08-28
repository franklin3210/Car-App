import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure this path is correct
import CarList from './components/carlist'; // Ensure this path is correct
import ExtraDetails from './components/extraDetails'; // Ensure this path is correct
import "./App.css"; // Ensure this path is correct
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showSearchBar, setShowSearchBar] = useState(false); // State to manage search bar visibility

  return (
    <Router>
      <div className="container">
        <Navbar setSearchTerm={setSearchTerm} />
        <div className="mobile-search">
          <FaSearch onClick={() => setShowSearchBar(!showSearchBar)} /> {/* Search icon */}
          {showSearchBar && (
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="search-input"
            />
          )}
        </div>
        <Routes>
          <Route path="/" element={<CarList searchTerm={searchTerm} />} />
          <Route path="/car/:id" element={<ExtraDetails searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;