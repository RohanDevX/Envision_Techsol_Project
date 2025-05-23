import React from 'react';
import Header from '../components/header/header';

function Payment() {
  return (
    <div>
      <Header />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "#f0a500", fontSize: "4rem", marginBottom: "20px" }}>
          Secure & Seamless Payments
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#777",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
          At Travelhub, we ensure that your booking experience is smooth and secure.
          Choose from multiple payment options and complete your travel reservations
          confidently. Your safety is our priority.

        </p>
      </div>
    </div>
  );
}


export default Payment;