import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
