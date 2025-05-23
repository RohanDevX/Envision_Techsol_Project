import React from 'react';
import Header from '../components/header/header';


function AboutUs() {
    return (
    <div>
      <Header />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "#f0a500", fontSize: "5rem", marginBottom: "10px" }}>
          About Us
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#777", maxWidth: "600px", margin: "0 auto" }}>
          At Travelhub, we are passionate explorers dedicated to making your journeys unforgettable...
        </p>
      </div>
    </div>
  );
 
}

export default AboutUs;
