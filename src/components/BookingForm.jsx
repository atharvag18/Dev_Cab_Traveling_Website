import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ContactToggle from "./ContactToggle";

const BookingForm = () => {
  const { destination } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const imageSrc = location.state?.image || "/images/default.png";

  const [tripType, setTripType] = useState("oneway");
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    returnDate: "",
    mobile: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.pickup.trim()) newErrors.pickup = "Pickup location is required";
    if (!formData.drop.trim()) newErrors.drop = "Drop location is required";
    if (!formData.date) newErrors.date = "Date is required";
    if (tripType === "roundtrip" && !formData.returnDate)
      newErrors.returnDate = "Return date is required";
    if (!formData.mobile) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckRates = () => {
    if (!validateForm()) return;

    const ownerNumber = "917020033003";
    let message = `🚖 *Booking Request* for *${destination}* : 
    - 📌 *Trip Type:* ${tripType}
    - 📍 *Pickup:* ${formData.pickup}
    - 📍 *Drop:* ${formData.drop}
    - 📅 *Date:* ${formData.date}
    ${tripType === "roundtrip" ? `- 🔄 Return Date: ${formData.returnDate}` : ""}
    - 📱 *Mobile:* ${formData.mobile}`;

    const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");

    setFormData({ pickup: "", drop: "", date: "", returnDate: "", mobile: "" });
  };

  return (
    <div className="one">
      <div className="two">
        <div className="three">
          <h2>Book {destination}</h2>
        </div>
        <div className="four">
          <button
            onClick={() => setTripType("oneway")}
            className={tripType === "oneway" ? "five active" : "five"}
          >
            One Way
          </button>
          <button
            onClick={() => setTripType("roundtrip")}
            className={tripType === "roundtrip" ? "five active" : "five"}
          >
            Round Trip
          </button>
        </div>

        <input
          type="text"
          name="pickup"
          placeholder="Pickup Location"
          value={formData.pickup}
          onChange={handleInputChange}
          className="six"
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
          className="six"
        />
        {errors.drop && (
          <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
            {errors.drop}
          </p>
        )}

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
          className="six"
        />
        {errors.date && (
          <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
            {errors.date}
          </p>
        )}

        {tripType === "roundtrip" && (
          <>
            <input
              type="date"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleInputChange}
              className="six"
            />
            {errors.returnDate && (
              <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
                {errors.returnDate}
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
          className="six"
        />
        {errors.mobile && (
          <p style={{ color: "red", fontSize: "12px", marginTop: "2px" }}>
            {errors.mobile}
          </p>
        )}

        <button onClick={handleCheckRates} className="seven">
          Check Rates
        </button>
        <button onClick={() => navigate(-1)} className="eight">
          Back
        </button>
      </div>
      <div className="nine">
        <img src={imageSrc} alt="Booking" className="ten" />
      </div>
      <ContactToggle />
    </div>
  );
};

export default BookingForm;
