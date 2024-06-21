import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="header-container">
        <h1>Hunger Diary Co.</h1>
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
