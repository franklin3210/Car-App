import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css'; // Adjust the path if necessary

function CarList({ searchTerm }) {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [carsPerPage, setCarsPerPage] = useState(9);

  useEffect(() => {
    fetch('https://carapp-server-yl26.onrender.com/api/cars') // Ensure this path is correct
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching car data:', error));
  }, []);

  useEffect(() => {
    const updateCarsPerPage = () => {
      if (window.innerWidth < 600) {
        setCarsPerPage(8);
      } else {
        setCarsPerPage(9);
      }
    };

    updateCarsPerPage();
    window.addEventListener('resize', updateCarsPerPage);

    return () => window.removeEventListener('resize', updateCarsPerPage);
  }, []);

  const filteredCars = cars.filter(car => 
    (car.title && car.title.toLowerCase().includes(searchTerm.toLowerCase())) || 
    (car.class && car.class.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  return (
    <div className="car-list-container">
      <div className="car-list">
        {currentCars.length > 0 ? (
          currentCars.map((car, index) => (
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
      <div className="pagination">
        {currentPage > 1 && (
          <button onClick={handlePreviousPage} className="pagination-button">Previous Page</button>
        )}
        {indexOfLastCar < filteredCars.length && (
          <button onClick={handleNextPage} className="pagination-button">Next Page</button>
        )}
      </div>
    </div>
  );
}

export default CarList;
