import React, { useState } from "react";

const CabBooking = () => {
  const [tripType, setTripType] = useState("oneway");
  const [formData, setFormData] = useState({
    name: "",
    pickup: "",
    drop: "",
    fromDate: "",
    toDate: "",
    mobile: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { name, pickup, drop, fromDate, toDate, mobile } = formData;
    let message = `Booking Details:
    - Trip Type: ${tripType.toUpperCase()}
    - Name : ${name}
    - Pickup: ${pickup}
    - Drop: ${drop}
    - Travel Date: ${fromDate}
    ${tripType === "roundtrip" ? -`Return Date: ${toDate}` : ""}
    - Mobile: ${mobile}`;

    const whatsappNumber = "917020033003";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
    setFormData({
      name: "",
      pickup: "",
      drop: "",
      fromDate: "",
      toDate: "",
      mobile: "",
    });
  };

  return (
    <>
      <div className="cab-booking" >
        <div style={{ backgroundColor: "black", borderRadius: "10px" }}>
          <h2
            className="head"
            style={{ backgroundColor: "black", borderRadius: "10px", }}
          >
            Book Your Cab With Dev Cab <br />
            <h4 style={{ marginTop: "10px", color: "red" }}>
              * Exclusive Rates *
            </h4>
          </h2>
        </div>

        <div
          className="form-container"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <div className="trip-toggle">
            <button
              className={tripType === "roundtrip" ? "active" : ""}
              onClick={() => setTripType("roundtrip")}
            >
              Round Trip
            </button>
            <button
              className={tripType === "oneway" ? "active" : ""}
              onClick={() => setTripType("oneway")}
            >
              One Way
            </button>
          </div>
          <div className="booking-form">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="pickup"
              placeholder="Pickup Location"
              value={formData.pickup}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="drop"
              placeholder="Drop Location"
              value={formData.drop}
              onChange={handleInputChange}
              required
            />
            <input
              type="date"
              name="fromDate"
              value={formData.fromDate}
              onChange={handleInputChange}
              required
            />
            {tripType === "roundtrip" && (
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleInputChange}
                required
              />
            )}
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleInputChange}
              required
            />
            <button className="submit-btn" onClick={handleSubmit}>
              Check Rates
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CabBooking;
