import React from "react";

const cars = [
  {
    name: "SWIFT DZIRE (SEDAN)",
    seating: "4 PASSENGERS",
    price: "Rs. PER KM",
    image: "../../images/swift.png",
    rating: 4,
  },
  {
    name: "ERTIGA (NEW MODEL)",
    seating: "6 PASSENGERS",
    price: "Rs. PER KM",
    image: "../../images/ertiga.png",
    rating: 5,
  },
  {
    name: "INNOVA  (SUV)",
    seating: "6 PASSENGERS",
    price: "Rs. PER KM",
    image: "../../images/innova1.png",
    rating: 5,
  },
  {
    name: "TEMPO TRAVELLER",
    seating: "18 PASSENGERS",
    price: "Rs. PER KM",
    image: "../../images/tempo.png",
    rating: 5,
  },
];

const CarSection = () => {
  return (
    <div className="car-section" id="cars">
      <h2 className="title">COMPLETE RANGE OF WELL MAINTAINED CARS</h2>
      <h3 className="description">
        We have a wide range of Vehicles for Outstation Tours on a hire basis.
        All Vehicles are well maintained with Experienced Drivers.
      </h3>

      <div className="car-list">
        {cars.map((car, index) => (
          <div
            className="car-card"
            key={index}
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img src={car.image} alt={car.name} className="car-image" />
            <h4 className="car-name">{car.name}</h4>
            <p className="car-seating">Seating: {car.seating}</p>
            <p className="car-price">{car.price}</p>
            <div className="car-rating">
              {"⭐".repeat(car.rating)} {/* Displays star rating */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarSection;
