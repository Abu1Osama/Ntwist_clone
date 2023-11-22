import React from "react";
import "./Footer.scss";
import ntwistlight from "../assets/ntwistlight.png"

function Footer() {
  return (
    <div id="Footer" className="Footer">
      <div className="footer-logo">
     <img src={ntwistlight} alt="" />
      </div>
      <div className="footer-header">
      <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="#">Privacy Policy</a>
        <a href="">Sitemap</a>
      </div>
      <div className="footer-adress">
        <span>9650 20 Ave NW, Edmonton, AB, T6N 1G1, Canada</span>
      </div>
      <div className="footer-social">
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-linkedin-in"></i>
      </div>
      <div className="footer-liscence">
        <span>© 2022. Ntwist Inc.</span>
      </div>
    </div>
  );
}

export default Footer;
