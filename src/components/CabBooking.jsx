import React, { useState } from "react";
import ContactToggle from "./ContactToggle";
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
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.pickup.trim()) newErrors.pickup = "Pickup location is required";
    if (!formData.drop.trim()) newErrors.drop = "Drop location is required";
    if (!formData.fromDate) newErrors.fromDate = "Travel date is required";
    if (tripType === "roundtrip" && !formData.toDate)
      newErrors.toDate = "Return date is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) return;

    const { name, pickup, drop, fromDate, toDate, mobile } = formData;
    let message = `Booking Details:
    - Trip Type: ${tripType.toUpperCase()}
    - Name: ${name}
    - Pickup: ${pickup}
    - Drop: ${drop}
    - Travel Date: ${fromDate}
    ${tripType === "roundtrip" ? `- Return Date: ${toDate}` : ""}
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
    <div className="cab-booking">
      <div style={{ backgroundColor: "black", borderRadius: "10px" }}>
        <h2
          className="head"
          style={{ backgroundColor: "black", borderRadius: "10px" }}
        >
          Book Your Cab With Dev Cab <br />
          <h4 style={{ marginTop: "10px", color: "red" }}>* Exclusive Rates *</h4>
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
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              {errors.name}
            </p>
          )}

          <input
            type="text"
            name="pickup"
            placeholder="Pickup Location"
            value={formData.pickup}
            onChange={handleInputChange}
          />
          {errors.pickup && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              {errors.pickup}
            </p>
          )}

          <input
            type="text"
            name="drop"
            placeholder="Drop Location"
            value={formData.drop}
            onChange={handleInputChange}
          />
          {errors.drop && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              {errors.drop}
            </p>
          )}

          <input
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleInputChange}
          />
          {errors.fromDate && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              {errors.fromDate}
            </p>
          )}

          {tripType === "roundtrip" && (
            <>
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleInputChange}
              />
              {errors.toDate && (
                <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
                  {errors.toDate}
                </p>
              )}
            </>
          )}

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleInputChange}
          />
          {errors.mobile && (
            <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
              {errors.mobile}
            </p>
          )}

          <button className="submit-btn" onClick={handleSubmit}>
            Check Rates
          </button>
        </div>
        <ContactToggle />
      </div>
    </div>
  );
};

export default CabBooking;
