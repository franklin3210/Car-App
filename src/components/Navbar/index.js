import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Import search icon from react-icons

import carlogo from "../../carlogo.png";
import './index.css'; // Ensure this path is correct

function Navbar({ setSearchTerm }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLogoClick = () => {
    navigate('/');
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
          <div className="search-bar-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              className="search-bar"
              onChange={handleSearchChange}
              placeholder="Search for cars..."
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;