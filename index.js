/*
Created a server for
Parcel has -> Hot Module Replacement (HMR)
File Watcher Algorithms - C++
BUNDLING
MINIFY
Cleaning our code
Manages dev and production built
Superfast build algorithms
Image Optimization also
Caching while development
compression
compatible with older version of browsers
HTTPS on development
Manages port number also
Consistent Hashing Algorithms
Zero Config
*/

//npx = npm run
// import React from "react";
// import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1", //Element Type
//   { id: "title", key: "h1" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
//   "Hi, My name is Himanshu Yadav" //Children //Children
// );
// console.log(heading);

// //React.createElement gives us object => which then convert into HTML => and puts in DOM

// const heading2 = React.createElement(
//   "h2", //Element Type
//   { id: "title", key: "h2" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
//   "Hi, My name is Harshita Yadav" //Children
// );
// console.log(heading2);

// const heading3 = React.createElement(
//   "h3", //Element Type
//   { id: "title",key:"h3" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
//   "Hi, My name is Him Yadav" //Children
// );
// console.log(heading3);
// const container = React.createElement("div", { id: "container" }, [
//   heading,
//   heading2,
//   heading3,
// ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// //   passing a react element in root
// root.render(container);

import  React from "react";
import ReactDOM from "react-dom/client";
//JSX?==>   React.createElement()  ==> Object ==> HTML(DOM)

// is JSX HTML inside js.....
const heading = (
  <h1 id="title" key="h2" classname="">
    Namaste React
  </h1>
);

//Component
// - Functional Component - NEW
// - Class Based Component - OLD

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
