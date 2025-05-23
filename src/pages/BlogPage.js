import React from 'react';
import Header from '../components/header/header';

function Blog() {
  return (
    <div>
      <Header />
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h1 style={{ color: "#f0a500", fontSize: "5rem", marginBottom: "10px" }}>
          Discover Our Stories
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#777", maxWidth: "600px", margin: "0 auto" }}>
          Dive into our journey, travel tips, behind-the-scenes experiences, and all the latest updates at Travelhub. Get inspired, stay informed, and explore the world with us!
        </p>
      </div>
    </div>
  );
}


export default Blog;

