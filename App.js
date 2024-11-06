import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <a href="/">
    <img
      src="https://imgs.search.brave.com/E10RA5dlJM5h842ljpWWr6UpNInvofb9gmJkV_IK2I4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tYXJr/ZXRwbGFjZS5jYW52/YS5jb20vRUFFNURF/LS1Ta3cvMS8wLzE2/MDB3L2NhbnZhLXdo/aXRlLW9yYW5nZS1z/aW1wbGUtaG9tZW1h/ZGUtcHJlbWl1bS1x/dWFsaXR5LXJlc3Rh/dXJhbnQtb24tbG9n/by10ZW1wbGF0ZXMt/RTlVUmZfeTJzMTAu/anBn"
      alt=""
      className="logo"
    />
  </a>
);

const HeaderComponent = () => {
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

const BodyComponent = () =>{
  return (
    <h4>Body</h4>
  );
}


const FooterComponent = () =>{
  return (
    <h4>Footer</h4>
  );
}

//React.Fragment
const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
