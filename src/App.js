import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Ensure this path is correct
import CarList from './components/carlist'; // Ensure this path is correct
import ExtraDetails from './components/extraDetails'; // Ensure this path is correct
import "./App.css"; // Ensure this path is correct

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <div className="container">
        <Navbar setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<CarList searchTerm={searchTerm} />} />
          <Route path="/car/:id" element={<ExtraDetails searchTerm={searchTerm} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;