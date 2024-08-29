import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch, FaTimes } from 'react-icons/fa'; // Import search and close icons

import carlogo from "../../carlogo.png";
import './index.css'; // Ensure this path is correct

function Navbar({ setSearchTerm }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTermState] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSearchTermState(e.target.value);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (searchTerm.trim() === '') {
        setSearchTerm(''); // Fetch all details if no search term is provided
      } else {
        setSearchTerm(searchTerm);
      }
      setIsSearchOpen(false); // Close the search bar
      // Optionally, you can navigate to a search results page
      // navigate(`/search?query=${searchTerm}`);
    }
  };

  // Check if the current path matches /car/:id
  const isCarDetailPage = /^\/car\/\d+$/.test(location.pathname);

  return (
    <div className="nav-wrapper">
      <div className="nav-class">
        <div className="nav-left" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={carlogo} alt="Logo" className="car-logo" />
          <h1 className="car-list-heading">motogarage</h1>
        </div>
        {!isCarDetailPage && (
          <>
            <div className="search-bar-container">
              <FaSearch className="search-icon disabled" onClick={toggleSearch} />
              <input
                type="text"
                className="search-bar"
                onChange={handleSearchChange}
                onKeyDown={handleSearchKeyDown}
                placeholder="Search for cars..."
              />
            </div>
            {isSearchOpen && (
              <div className="search-overlay">
                <div className="mobile-search">
                  <input
                    type="text"
                    className="search-input"
                    onChange={handleSearchChange}
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Search for cars..."
                  />
                  <FaTimes className="close-search" onClick={toggleSearch} />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;