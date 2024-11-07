import {LOGO_URL} from "/src/config"
const Title = () => (
  <a href="/">
    <img
      src={LOGO_URL}
      alt=""
      className="logo"
    />
  </a>
);

const Header = () => {
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
    </div>
  );
};

export default Header;

