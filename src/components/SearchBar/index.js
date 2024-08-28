import React from 'react';
import './index.css'; // Ensure this path is correct

function SearchBar({ setSearchTerm }) {
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <input
            type="text"
            className="search-bar"
            onChange={handleSearchChange}
            placeholder="Search for cars..."
        />
    );
}

export default SearchBar;

