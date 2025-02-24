import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const BookingForm = () => {
    const { destination } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    
    // Get image from location state (sent from Tour section)
    const imageSrc = location.state?.image || "/images/default.png"; 

    const [tripType, setTripType] = useState("oneway");
    const [pickup, setPickup] = useState("");
    const [drop, setDrop] = useState("");
    const [date, setDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [mobile, setMobile] = useState("");

    const handleCheckRates = () => {
        const ownerNumber = "917020033003";
        let message = Booking `Request for ${destination}%0A`;
        message += `Trip Type: ${tripType}%0A`;
        message += `Pickup: ${pickup}%0A`;
        message += `Drop: ${drop}%0A`;
        message += `Date: ${date}%0A`;
        
        if (tripType === "roundtrip") {
            message += Return `Date: ${returnDate}%0A`;
        }

        message += `Mobile: ${mobile}`;

        const whatsappURL = `https://wa.me/${ownerNumber}?text=${message}`;
        window.open(whatsappURL, "_blank");
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

                <input type="text" placeholder="Pickup Location" value={pickup} onChange={(e) => setPickup(e.target.value)} className="six" />
                <input type="text" placeholder="Drop Location" value={drop} onChange={(e) => setDrop(e.target.value)} className="six" />
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="six" />
                
                {tripType === "roundtrip" && (
                    <input type="date" placeholder="Return Date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} className="six" />
                )}

                <input type="tel" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} className="six" />

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