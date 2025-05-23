import React from 'react';
import Header from '../components/header/header';

function Contact() {
  return (
    <div>
      <Header />
      <div style={{ padding: "60px 20px", textAlign: "center" }}>
        <h1 style={{ color: "#f0a500", fontSize: "5rem", marginBottom: "15px" }}>
          Contact Us
        </h1>
        <p style={{
          fontSize: "1.2rem",
          color: "#555",
          maxWidth: "700px",
          margin: "0 auto",
          lineHeight: "1.6"
        }}>
         <p style={{
  fontSize: "1.2rem",
  color: "#555",
  maxWidth: "700px",
  margin: "0 auto",
  lineHeight: "1.6"
}}>
  We'd love to hear from you! Whether you have questions, feedback, or partnership opportunities, our team is always here to help.  
  <br /><br />
  📧 Email us at: <strong><a href="mailto:travelhub123@gmail.com" style={{ color: "#f0a500", textDecoration: "none" }}>travelhub123@gmail.com</a></strong>  
  <br />
  📞 Call us at: <strong style={{ color: "#f0a500" }}>+91 8660778878</strong>
</p>

        </p>
      </div>
    </div>
  );
}


export default Contact;