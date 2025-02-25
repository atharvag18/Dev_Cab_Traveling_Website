import React from "react";

const cabRoutes = [
  "Kolhapur to Mumbai Cab",
  "Kolhapur to Mumbai Airport Cab",
  "Mumbai Airport to Kolhapur Cab",
  "Mumbai to Kolhapur Cab",
  "Pune to Kolhapur Cab",
  "Pune Airport to Kolhapur Cab",
  "Kolhapur to Pune Airport Cab",
  "Kolhapur to  Goa Cab",
  "Goa to Kolhapue Cab",
  "Kolhapur to Solapur Cab",
  "Solapur to Kolhapur Cab",
  "Kolhapur toMahabaleshwar  Cab",
  "Mahabaleshwar to Kolhapur Cab",
  "Kolhapur to Thane Cab",
  "Thane to Kolhapur Cab",
  "Kolhapur to CST Cab",
  "Pune to Goa Cab",
  "Goa to Pune Cab",
  "Pune to Mumbai Cab",
  "Mumbai to  Pune Cab",
  "Kolhapur to Belgav Cab",
];

// Function to split routes into columns (max 7 per column)
const splitRoutesIntoColumns = (routes, maxPerColumn) => {
  const columns = [];
  for (let i = 0; i < routes.length; i += maxPerColumn) {
    columns.push(routes.slice(i, i + maxPerColumn));
  }
  return columns;
};

const CabList = () => {
  const columns = splitRoutesIntoColumns(cabRoutes, 7);

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
        }}
        
      >
        <h1> Routes</h1>
      </div>
      <div className="container">
        {/* Cab Routes List in Columns */}
        <div className="route-list">
          {columns.map((column, index) => (
            <ul key={index} className="route-column">
              {column.map((route, i) => (
                <li key={i}>🚖 {route}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default CabList;
