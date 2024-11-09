import React, { useState } from "react";
import { LOGO_URL } from "/src/config";
// import Logo from "../assets/img/logo.jpg";
import { Link } from "react-router-dom";

// const loggedinUser = () => {
//   //API Call to authentication
//   return false;
// };

const Title = () => (
  <a href="/">
    <img src={LOGO_URL} alt="" className="logo" />
  </a>
);

//SPA :- Single Page Application
//Client side routing

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>

          <Link to="/Contact">Contact</Link>

          <Link>Cart</Link>
        </ul>
      </div>
      <div className="auth-btn">
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;
