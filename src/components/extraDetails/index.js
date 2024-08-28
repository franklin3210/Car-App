import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import seat from "../../seatlogo.png"
import './index.css'; // Adjust the path if necessary

function ExtraDetails() {
  const location = useLocation();
  const { car } = location.state || {};
  const [carDetails, setCarDetails] = useState(car);

  useEffect(() => {
    if (!carDetails) {
      fetch('/path/to/cars.json')
        .then(response => response.json())
        .then(data => {
          const foundCar = data.cars.find(c => c.id === car.id);
          setCarDetails(foundCar);
        });
    }
  }, [carDetails, car]);

  if (!carDetails) {
    return <div>No car details found.</div>;
  }

  return (
    <div className="car-details-container">
      <h1>{carDetails.title}</h1> {/* Moved the title to the top */}
      <div className='car-details'>
        <div className="car-details-left">
          {carDetails.image && (
            <img src={carDetails.image} alt={carDetails.title} className="car-details-image" />
          )}
        </div>
        <div className="car-details-right">
          {carDetails.class && (
            <p><span>Class: </span> {carDetails.class}</p>
          )}
          {carDetails.start_production && (
            <p><span>Start Production: </span>{carDetails.start_production}</p>
          )}
          {carDetails.ratings && (
            <div className="ratings-container">
              <p><span>Ratings: </span>{carDetails.ratings}</p>
              <div className="ratings-bar">
                <div className="ratings-fill" style={{ width: `${carDetails.ratings * 20}%` }}></div>
              </div>
            </div>
          )}
          {carDetails.safety_features && carDetails.safety_features.length > 0 && (
            <div className="safety-features-container">
              <h3>Safety Features</h3>
              <ul className="safety-features-list">
                {carDetails.safety_features.map((feature, index) => (
                  <li key={index} className="safety-feature-item">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {carDetails.seating_capacity && (
            <div className="seating-capacity-container">
              <h3>Seating Capacity</h3>
              <div className="seats">
                {Array.from({ length: carDetails.seating_capacity }).map((_, index) => (
                  <img key={index} src={seat} alt="Seat" className="seat-icon" />
                ))}
              </div>
            </div>
          )}
          {carDetails.url && (
            <a href={carDetails.url} target="_blank" rel="noopener noreferrer" className="view-details-button">
              View Details
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ExtraDetails;