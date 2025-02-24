import React from "react";

const Welcome = () => {
  return (
    <>
      <div
        class="p-3 mb-2 bg-primary-subtle text-primary-emphasis con"
        style={{
          marginTop: "100px",
          marginLeft:"auto",
          marginRight:"auto",
          
          display:"flex",
          flexDirection:"column",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "2.5rem",
          backgroundColor:"blueviolet",
          borderRadius:"10px",
          width:"60%",
          alignItems:"center",
          alignContent:"center",
          justifyContent:"center"
        }}
        id="#"
      >
        Welcome To Dev Cabs Services
      </div>
      <div className="container">
        <div
          className="img"
          data-aos="fade-down "
          data-aos-duration="1000"
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img src="../../images/home.png" alt="hero" />
        </div>
        <div className="text" style={{ fontSize: "large", color: "white" , lineSpacing:"1"}}>
          Welcome to Dev Tours and Travels! We're thrilled to have you here and
          are eager to assist you in crafting unforgettable travel experiences.
          Our mission is to provide top-notch transportation services that cater
          to your unique journey requirements. Whether you're considering a
          one-way trip to a new destination, planning a round trip for a
          comprehensive adventure, or seeking a customized itinerary tailored to
          your preferences, we've got you covered. Our fleet boasts a range of
          well-maintained vehicles, ensuring that you travel in both comfort and
          style. Our professional drivers are not only skilled but also
          committed to making your journey safe and pleasant. At Dev Tours and
          Travels, we understand that every traveler has distinct needs. That's
          why we offer flexible scheduling and personalized services to align
          with your plans. Feel free to explore our website to learn more about
          our services, fleet options, and special offers. If you have any
          questions or need assistance, our dedicated customer support team is
          just a click away, ready to provide prompt and helpful responses.
          Thank you for considering Dev Tours and Travels as your travel
          partner. We look forward to the opportunity to serve you and make your
          journey truly exceptional.
        </div>
      </div>
    </>
  );
};

export default Welcome;
