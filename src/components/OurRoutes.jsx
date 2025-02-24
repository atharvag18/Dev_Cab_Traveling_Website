import React from "react";
import { useNavigate } from "react-router-dom";

const tourPackages = [
  { name: "ASHTAVINAYAK DARSHAN", image: "../images/ganpati.png", rating: 5 },
  { name: "TULJAPUR, AKKALKOT, PANDHARPUR DARSHAN", image: "../images/solapur.png", rating: 5 },
  { name: "SHIRDI DARSHAN", image: "../images/shirdi.png", rating: 5 },
  { name: "KOLHAPUR DARSHAN CAB", image: "../images/kolhapur.png", rating: 5 },
  { name: "MAHABALESHWAR TOUR", image: "../images/mahabaleshwar.png", rating: 4 },
  { name: "MUMBAI TOUR", image: "../images/mumbai.png", rating: 4 },
  { name: "LONAVALA TOUR", image: "../images/lonavala.png", rating: 4 },
  { name: "PUNE TOUR", image: "../images/pune.png", rating: 5 }
];

const OurRoutes = () => {
  const navigate = useNavigate();

  const handleBooking = (tourName,image) => {
    navigate(`/booking/${encodeURIComponent(tourName)}`,{state:{image}});
  };

  return (
    <div className="tour-section" id="tours">
      <h1 className="service-heading">Top Destinations</h1>
      <h2 className="tour-title">Enjoy Your Weekends with Our Popular Tour Packages</h2>
      <div className="tour-list">
        {tourPackages.map((tour, index) => (
          <div key={index} className="tour-card" onClick={() => handleBooking(tour.name)}>
            <img src={tour.image} alt={tour.name} className="tour-image" />
            <h3 className="tour-name">{tour.name}</h3>
            <div className="tour-rating">{"★".repeat(tour.rating)}</div>
            <button className="book-now-btn" onClick={(e)=>{e.stopPropagation(); handleBooking(tour.name , tour.image)}}>Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRoutes;