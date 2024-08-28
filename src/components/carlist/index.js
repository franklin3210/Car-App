import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Adjust the path if necessary

function CarList({ searchTerm }) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/cars.json') // Ensure this path is correct
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car data:', error));
  }, []);

  const filteredCars = cars.filter(car => 
    (car.title && car.title.toLowerCase().includes(searchTerm.toLowerCase())) || 
    (car.class && car.class.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="car-list-container">
      <div className="car-list">
        {filteredCars.length > 0 ? (
          filteredCars.map((car, index) => (
            <Link 
              to={`/car/${index}`} 
              state={{ car }} // Correctly pass the car object in the state
              key={index} 
              className="car-card"
            >
              <img src={car.image} alt={car.title} className="car-image" />
              <h3>{car.title}</h3> {/* Changed to h3 for better hierarchy */}
              <p>Class: {car.class}</p>
            </Link>
          ))
        ) : (
          <p>No cars available.</p>
        )}
      </div>
    </div>
  );
}

export default CarList;
