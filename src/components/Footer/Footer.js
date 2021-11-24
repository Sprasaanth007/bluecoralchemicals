import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-inner-container">
        <div className="footer-contact">
          <h3>Contact Us:</h3>
          <br />
          <p>Phone 1: 1234567890</p>
          <p>Phone 2: 1234567890</p>
          <p>Email: contact@bluecoralchemicals.com</p>
          <p>GST No: 1234567890</p>
        </div>
        <div className="footer-address">
          <h3>Our Address:</h3>
          <br />
          <p>Blue coral chemicals</p>
          <p>Door No.24/9, 1st street,</p>
          <p>Arul Nagar, Madhavaram,</p>
          <p>Chennai-600057</p>
        </div>
      </div>
      <div className="copyright-text">Copyright @ Blue Coral Chemicals</div>
    </div>
  );
};

export default Footer;
