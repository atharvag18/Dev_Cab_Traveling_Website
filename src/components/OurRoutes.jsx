import React from "react";

const tourPackages = [
  {
    name: "ASHTAVINAYAK DARSHAN",
    image: "../../images/ganpati.png",
    rating: 5,
  },
  {
    name: "TULJAPUR, AKKALKOT, PANDHARPUR DARSHAN",
    image: "../../images/solapur.png",
    rating: 5,
  },

  { name: "SHIRDI DARSHAN", image: "../../images/shirdi.png", rating: 5 },
  {
    name: "KOLHAPUR DARSHAN CAB",
    image: "../../images/kolhapur.png",
    rating: 5,
  },
  {
    name: "MAHABALESHWAR TOUR",
    image: "../../images/mahabaleshwar.png",
    rating: 4,
  },
  {
    name: "MUMBAI TOUR",
    image: "../../images/mumbai.png",
    rating: 4,
  },
  { name: "LONAVALA TOUR", image: "../../images/lonavala.png", rating: 4 },

  { name: "PUNE TOUR", image: "../../images/pune.png", rating: 5 },
];

const OurRoutes = () => {
  return (
    <div className="tour-section" id="tours">
      <div className="service-heading">
        <h1>Top Destination</h1>
      </div>
      <h2 className="tour-title">
        Enjoy Your Weekends with Our Popular Tour Packages
      </h2>
      <h4 className="tour-description">
        We have designed, affordable & the most popular outstation tour
        packages. Covering almost all maharastra tourist destinations.
      </h4>

      <div className="tour-list">
        {tourPackages.map((tour, index) => (
          <div
            className="tour-card"
            key={index}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img src={tour.image} alt={tour.name} className="tour-image" />
            <h3 className="tour-name">{tour.name}</h3>
            <div className="tour-rating">{"⭐".repeat(tour.rating)}</div>
            <a href="#home" className="tour-inclusion">
              ALL INCLUSIVE
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurRoutes;
