import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👍",
      title: "Reliable Service",
      description: "We ensure timely pickups and drop-offs.",
    },
    {
      icon: "⏳",
      title: "24/7 Service",
      description: "Available round the clock for your convenience.",
    },
    {
      icon: "💰",
      title: "Affordable Price",
      description: "Best pricing with no hidden charges.",
    },
    {
      icon: "🚗",
      title: "Well-Maintained Cars",
      description: "Our cars are regularly maintained for safety.",
    },
    {
      icon: "📅",
      title: "Easy Booking",
      description: "Simple and quick booking process.",
    },
    {
      icon: "👨‍✈",
      title: "Experienced Drivers",
      description: "Skilled and trained professionals.",
    },
    {
      icon: "🎒",
      title: "Online Cab Booking",
      description:
        "Booking Your cab Online Without any Tension and get Confirmation on mobile",
    },
    {
      icon: "👍",
      title: "Client Satisfaction",
      description:
        "We have many client , who satisfied with our service and rates",
    },
    {
      icon: "🚕",
      title: "Carriers on Top",
      description:
        "All our Vehicals are equipped with carriers on top for extra luggage",
    },
  ];

  return (
    <section className="why-choose-us" >
      <h2>Why Choose Dev Cars Service?</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
