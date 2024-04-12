import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
    "h1", //Element Type
    { id: "title" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
    "Hi, My name is Himanshu Yadav" //Children
  );
  
  const heading2 = React.createElement(
    "h2", //Element Type
    { id: "title" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
    "Hi, My name is Harshita Yadav" //Children
  );
  
  const heading3 = React.createElement(
    "h3", //Element Type
    { id: "title" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
    "Hi, My name is Him Yadav" //Children
  );
  const container = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
    heading3,
  ]);
  console.log(heading);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  
  //passing a react element in root
  root.render(container);
  
  