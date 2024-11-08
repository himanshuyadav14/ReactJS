import React, { useState } from "react";
import { LOGO_URL } from "/src/config";

// const loggedinUser = () => {
//   //API Call to authentication
//   return false;
// };

const Title = () => (
  <a href="/">
    <img src={LOGO_URL} alt="" className="logo" />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
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
