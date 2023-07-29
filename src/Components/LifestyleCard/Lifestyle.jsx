import React from "react";
import "./Lifestyle.css";
import img1 from "../../Asset/farming.png";
import img2 from "../../Asset/farming2.png";
import img3 from "../../Asset/farming3.png";

function Lifestyle() {
  return (
    
    <div className="lifeStyle">
      <div className="heading">
        <p>कृषि समाचार </p>
      </div>
      <div className="cardContainer">
        {/* Card */}
        <div className="lifeStyleCard">
        
          <img src={img1} alt="" />
          <div className="category">
            <h6> कृषि विशेष </h6>
          </div>
          <div className="content">
            <h5>स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की आवश्यकता है...</h5>
            <p>
              <span> </span> 19. February 2023
            </p>
          </div>
        </div>
        {/* Card End */}

        {/* Card */}
        <div className="lifeStyleCard">
        
          <img src={img2} alt="" />
          <div className="category">
            <h6> कृषि विशेष </h6>
          </div>
          <div className="content">
            <h5>स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की आवश्यकता है...</h5>
            <p>
              <span> </span> 19. February 2023
            </p>
          </div>
        </div>
        {/* Card End */}

        {/* Card */}
        <div className="lifeStyleCard">
        
          <img src={img3} alt="" />
          <div className="category">
            <h6> कृषि विशेष </h6>
          </div>
          <div className="content">
            <h5>स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की आवश्यकता है...</h5>
            <p>
              <span> </span> 19. February 2023
            </p>
          </div>
        </div>
        {/* Card End */}

        {/* Card */}
        <div className="lifeStyleCard">
        
          <img src={img1} alt="" />
          <div className="category">
            <h6> कृषि विशेष </h6>
          </div>
          <div className="content">
            <h5>स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की आवश्यकता है...</h5>
            <p>
              <span> </span> 19. February 2023
            </p>
          </div>
        </div>
        {/* Card End */}

        {/* Card */}
        <div className="lifeStyleCard">
        
          <img src={img2} alt="" />
          <div className="category">
            <h6> कृषि विशेष </h6>
          </div>
          <div className="content">
            <h5>स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की आवश्यकता है...</h5>
            <p>
              <span> </span> 19. February 2023
            </p>
          </div>
        </div>
        {/* Card End */}

        {/* Card */}
        <div className="lifeStyleCard">
        
          <img src={img3} alt="" />
          <div className="category">
            <h6> कृषि विशेष </h6>
          </div>
          <div className="content">
            <h5>स्थायी समिति का कहना है कि कृषि मशीनीकरण के लिए अधिक धन की आवश्यकता है...</h5>
            <p>
              <span> </span> 19. February 2023
            </p>
          </div>
        </div>
        {/* Card End */}
      </div>
    </div>
  );
}

export default Lifestyle;
