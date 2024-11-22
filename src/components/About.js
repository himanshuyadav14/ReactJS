import { Outlet } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About us page.</h1>
      <p>This is a namaste live - Finding the path</p>
      <Outlet />
    </div>
  );
};

export default About;
