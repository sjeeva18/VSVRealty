import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./PhotoRoom-20230829_231247.png" alt="" width={120} />

          <span className="fourthText">
            © 2023 VSV Realty. All rights reserved. Explore our visionary
            projects for exceptional living.
            <br /> Contact us for inquiries or follow us on social media for the
            latest updates.
            <br /> Privacy Policy | Terms of Service.
          </span>
        </div>
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="thirdText">
            No.17/1, 5th St, Indira Nagar, <br /> Virugambakkam, Chennai -
            600092
          </span>

          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
