import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

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

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckRates = () => {
        const ownerNumber = "917020033003"; 
        let message = `🚖 *Booking Request* for *${destination}* : 
        - 📌 *Trip Type:* ${tripType}
        - 📍 *Pickup:* ${formData.pickup}
        - 📍 *Drop:* ${formData.drop}
        - 📅 *Date:* ${formData.date}
        ${tripType === "roundtrip"? -`Return Date : ${formData.returnDate}`:""}
        -📱 *Mobile:* ${formData.mobile}`;

        const whatsappURL = `https://wa.me/${ownerNumber}?text=${encodeURIComponent(message)}`;
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
                    <button onClick={() => setTripType("oneway")} className={tripType === "oneway" ? "five active" : "five"}>
                        One Way
                    </button>
                    <button onClick={() => setTripType("roundtrip")} className={tripType === "roundtrip" ? "five active" : "five"}>
                        Round Trip
                    </button>
                </div>
                <input type="text" name="pickup" placeholder="Pickup Location" value={formData.pickup} onChange={handleInputChange} className="six" />
                <input type="text" name="drop" placeholder="Drop Location" value={formData.drop} onChange={handleInputChange} className="six" />
                <input type="date" name="date" value={formData.date} onChange={handleInputChange} className="six" />

                {tripType === "roundtrip" && (
                    <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} className="six" />
                )}

                <input type="tel" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleInputChange} className="six" />

                <button onClick={handleCheckRates} className="seven">Check Rates</button>
                <button onClick={() => navigate(-1)} className="eight">Back</button>
            </div>
            <div className="nine">
                <img src={imageSrc} alt="Booking" className="ten" />
            </div>
        </div>
    );
};

export default BookingForm;