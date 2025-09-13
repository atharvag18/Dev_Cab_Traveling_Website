import React from "react";

const Welcome = () => {
  const styles = {
    headerBox: {
      marginTop: "100px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "2rem",
      backgroundColor: "blueviolet",
      borderRadius: "10px",
      width: "90%", 
      maxWidth: "800px",
      alignItems: "center",
      justifyContent: "center",
      padding: "15px",
      color: "white",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      flexWrap: "wrap",
      marginTop: "30px",
      gap: "20px",
    },
    imgBox: {
      flex: "1 1 300px",
      display: "flex",
      justifyContent: "center",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
      borderRadius: "10px",
    },
    textBox: {
      flex: "1 1 300px", // responsive flex
      fontSize: "1rem",
      color: "white",
      lineHeight: "1.6",
      textAlign: "justify",
      padding: "10px",
    },
  };

  return (
    <>
      {/* Header Section */}
      <div className="con" style={styles.headerBox}>
        Welcome To Dev Cabs Services
      </div>

      {/* Content Section */}
      <div className="container" style={styles.container}>
        {/* Image */}
        <div className="img" style={styles.imgBox}>
          <img src="../../images/home.png" alt="hero" style={styles.image} />
        </div>

        {/* Text */}
        <div className="text" style={styles.textBox}>
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
          journey truly exceptional.
        </div>
      </div>
    </>
  );
};

export default Welcome;
