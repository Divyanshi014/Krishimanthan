import React from "react";
import "./Footer.css";
import news from "../Images/hero1.jpg";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer-section">
          <h1>KrishiManthan</h1>
          <p>
            Consequat mollis euismod nec justo varius, erat neque. enim cursus
            condimentum vivamus aliquet aliquet sociis. Aliquet
          </p>
          <div>
            <p>krishimanthan@gmail.com</p>
            <p>+91 9485468410</p>
          </div>
        </div>

        <div className="footer-news">
          <h4>WEATHER</h4>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>Google To Boost Android Security In Few Days </p>
          </div>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>Google To Boost Android Security In Few Days. </p>
          </div>
        </div>

        <div className="footer-news">
          <h4>WEATHER</h4>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>Google To Boost Android Security In Few Days </p>
          </div>
          <div className="news">
            <img src={news} alt="Loading" />
            <p>Google To Boost Android Security In Few Days </p>
          </div>
        </div>

        <div className="footer-labels">
          <h4>LABELS</h4>
          <ul>
            <li>Weather</li>
            <li>Agriculture</li>
            <li>Technology</li>
            <li>Fertilizer</li>
          </ul>
        </div>
      </div>
      <div className="credits">
        <p>© all rights reserved</p>
        <p>
          made with <span>&#x2764;</span> by Agile Support
        </p>
      </div>
    </div>
  );
}

export default Footer;
