import React, { useState } from "react";
import "./SearchDoctorPage.css"; // Import CSS for styling

const SearchDoctorPage = () => {
  const [location, setLocation] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState([
    {
      id: 1,
      name: "Dr. John Doe",
      specialization: "Cardiologist",
      rating: 4.9,
      reviews: 120,
      location: "New York, NY",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Dr. Jane Smith",
      specialization: "Dermatologist",
      rating: 4.8,
      reviews: 95,
      location: "Los Angeles, CA",
      image: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      specialization: "Pediatrician",
      rating: 4.7,
      reviews: 80,
      location: "Chicago, IL",
      image: "https://via.placeholder.com/100",
    },
  ]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simulate filtering doctors based on location and specialization
    const filteredDoctors = doctors.filter(
      (doctor) =>
        doctor.location.toLowerCase().includes(location.toLowerCase()) &&
        doctor.specialization.toLowerCase().includes(specialization.toLowerCase())
    );
    setDoctors(filteredDoctors);
  };

  return (
    <div className="search-doctor-page">
      <h1>Find a Doctor Near You</h1>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your location"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <input
              type="text"
              id="specialization"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              placeholder="e.g., Cardiologist"
              required
            />
          </div>
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      <div className="doctors-list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} className="doctor-image" />
            <div className="doctor-details">
              <h2>{doctor.name}</h2>
              <p>{doctor.specialization}</p>
              <p>
                ⭐ {doctor.rating} ({doctor.reviews} reviews)
              </p>
              <p>📍 {doctor.location}</p>
              <button className="book-button">Book Appointment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchDoctorPage;