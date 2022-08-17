import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>Duds Mart</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights {year} &copy; Md Farhan Quamar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/mdfarhanquamar">Instagram</a>
        <a href="http://instagram.com/mdfarhanquamar">Youtube</a>
        <a href="https://www.facebook.com/mdfarhan.quamar.7">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
