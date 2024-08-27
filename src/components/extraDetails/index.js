import React from 'react';
import { useLocation } from 'react-router-dom';
import './index.css';

function ExtraDetails() {
  const location = useLocation();
  const car = location.state?.car; // Use optional chaining to avoid errors

  console.log(location.state); // Check the state

  if (!car) {
    return <p>No car details available.</p>; // Handle the case where car is not available
  }

  return (
    <div className="extra-details">
      <h1>{car.title}</h1>
      <img src={car.image} alt={car.title} className="extra-image" />
      <p><strong>Start Production:</strong> {car.start_production}</p>
      <p><strong>Class:</strong> {car.class}</p>
      <p><strong>Seating Capacity:</strong> {car.seating_capacity}</p>
      <p><strong>Ratings:</strong> {car.ratings}</p>
      <p><strong>Safety Features:</strong> {car.safety_features.join(', ')}</p>
      <p><strong>More Info:</strong> <a href={car.url} target="_blank" rel="noopener noreferrer">View Details</a></p>
    </div>
  );
}

export default ExtraDetails;