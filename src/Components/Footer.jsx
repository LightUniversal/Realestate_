import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-box">
        <div className="box">
          <div className="logo">
            <img src="white-logo.png" alt="" />
          </div>

          <p>investing in your future one home at a time</p>

          <div className="subscribe">
            <form action="">
              <input type="text" placeholder="Enter your email" />
              <button>subscribe</button>
            </form>
          </div>
        </div>

        <div className="box">
          <h3>quick link</h3>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">rent</a>
            </li>
            <li>
              <a href="#">sell</a>
            </li>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="tel:+2349132623281" className=" flex items-center gap-3">
                <FaPhone /> 09132623281
              </a>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>about us</h3>
          <ul>
            <li>
              <a href="#">payment place</a>
            </li>
            <li>
              <a href="#">make saving more</a>
            </li>
            <li>
              <a href="#">tax calculator</a>
            </li>
            <li>
              <a href="#">talk to us</a>
            </li>
          </ul>
        </div>

        <div className="box">
          <h3>contact info</h3>
          <ul>
            <li>Kwara State</li>
            <li>
              <a href="tel:+2349132623281" className=" flex items-center gap-3">
                <FaPhone /> 09132623281
              </a>
            </li>
            <li>
              <a
                href="mailto:lightsinfo78@gmail.com"
                className=" flex items-center gap-3"
              >
                <FaEnvelope /> Contact us via Email
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="copyright">
        &copy; 2024 MustafaEstate all rights reserved
      </div>
    </div>
  );
};

export default Footer;
