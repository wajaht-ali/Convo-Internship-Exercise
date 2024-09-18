import React from "react";
import "../styles/footer.css";
import Logo_img from "../assets/main_logo.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="ftr_content">
        <img src={Logo_img} alt="Logo_image" />
        <p className="text">All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
