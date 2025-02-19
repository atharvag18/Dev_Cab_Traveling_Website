import React from "react";

const cars = [
  {
    name: "Innova",
    image: "../../images/innova1.png",
    rates: { mumbai: 9000, pune: 6000, goa: 6500 },
  },
  {
    name: "Ertiga",
    image: "../../images/ertiga.png",
    rates: { mumbai: 7500, pune: 5000, goa: 5500 },
  },
  {
    name: "Swift",
    image: "../../images/swift.png",
    rates: { mumbai: 6500, pune: 4000, goa: 4500 },
  },
];

const TaxiRates = () => {
  return (
    <>
      <div
        className="service-heading"
        style={{
          padding: " 20px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          margin: "auto",
          color: "white",
        }}
        id="rates"
      >
        <h1>Rates</h1>
      </div>
      <div className="taxi-container">
        {cars.map((car, index) => (
          <div
            key={index}
            className="taxi-card"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <img src={car.image} alt={car.name} className="car-image" />
            <div className="taxi-info">
              <h2 style={{ fontSize: "1.5rem" }}>{car.name}</h2>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                Kolhapur-Mumbai: ₹{car.rates.mumbai}
              </p>
              <p style={{ fontWeight: "bold" }}>
                Kolhapur-Pune: ₹{car.rates.pune}
              </p>
              <p style={{ fontWeight: "bold" }}>
                Kolhapur-Goa: ₹{car.rates.goa}
              </p>
              <p style={{ fontWeight: "bold" }}>
                {" "}
                Mumbai-Kolhapur: ₹{car.rates.mumbai}
              </p>
              <p style={{ fontWeight: "bold" }}>
                Pune-Kolhapur: ₹{car.rates.pune}
              </p>
              <p style={{ fontWeight: "bold" }}>
                Goa-Kolhapur: ₹{car.rates.goa}
              </p>
            </div>
          </div>
        ))}
      </div>
      <h1
        className="specialization-box"
        style={{ fontSize: "1.8rem", color: "red" }}
      >
        *Specilization in Oneway Airport Pickup And Drop Service With Comfort,
        Convenience, and Affordable Fares ! *
      </h1>
    </>
  );
};

export default TaxiRates;
