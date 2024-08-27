import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarList from './components/carlist'; // Ensure this path is correct
import ExtraDetails from './components/extraDetails'; // Ensure this path is correct

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/car/:id" element={<ExtraDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;