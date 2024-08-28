import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from "../SearchBar"
import carlogo from "../../carlogo.png";
import './index.css'; // Ensure this path is correct

function Navbar({ setSearchTerm }) {
  const navigate = useNavigate();

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <div className="nav-wrapper">
      <div className="nav-class">
        <div className="nav-left" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src={carlogo} alt="Logo" className="car-logo" />
          <h1 className="car-list-heading">Car List</h1>
        </div>
        <div className="search-bar-container">
          
          {/* <input
            type="text"
            className="search-bar"
            onChange={handleSearchChange}
            placeholder="Search for cars..."
          /> */}
          <SearchBar setSearchTerm={setSearchTerm} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;