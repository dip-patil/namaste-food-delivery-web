import React from "react";
import './Footer.css'
import downloadApp from "../assets/downloadApp.png";

export default function Footer() {
  return (
    <div className="rowFooter">
      <div className="container-footer">
        <div className="downlode-footer">
          <p className="heading-footer">Namaste Food</p>
          <img src={downloadApp} alt="" style={{width: "11rem", height: "7rem"}} />
        </div>
        <div className="services">
          <p><b>Services</b></p>
          <p>Franchise</p>
          <p>For Investors</p>
          <p>Business</p>
          <p>Restaurant Services</p>
        </div>
        <div className="about">
          <p><b>About</b></p>
          <p>Our Story</p>
          <p>Benefits</p>
          <p>Team</p>
          <p>Careers</p>
        </div>
        <div className="help">
          <p><b>Help</b></p>
          <p>Contact Us</p>
          <p>FAQs</p>
        </div>
      </div>
      <div className="Terms-Conditions">
        <p>Terms and conditions</p>
        <p>Privacy Policy</p>
        <div>
          This site is developed by Dipkumar Patil - dipkumar.patil.2017@gmail.com
        </div>
      </div>
    </div>
  );
}
