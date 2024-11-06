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

import React from "react";
import ReactDOM from "react-dom/client";
//JSX?==>   React.createElement()  ==> Object ==> HTML(DOM)

// is JSX HTML inside js.....
const Title = () => (
  <h1 id="title" key="h2" className="">
    Namaste React
  </h1>
);

//Component
// - Functional Component - NEW  ==> We will use this most of the time
// It is nothing but just a javascript function
//Name of the component Starts with Capital Letter

// const data = api.getData();

//If our api gets us malicious data then JSX santizes it. 
//Read about sanitization

//Component composition ==> If we use a component inside a component its called component composition
const HeaderComponent = () => {
  //returning just a Peice of JSX or returning a create element
  // return <h1>Namaste React Functional Component</h1>
  return (
    <div>
      {/* {data} */}
      {/* {heading} */}
      <Title/>
      <h1>Namaste</h1>
      <h1>tag</h1>
    </div>
  );
};

//This is also a valid syntax without return
// const HeaderComponent2 = () => (
//   <div></div>
// )

// - Class Based Component - OLD ==> We cover this also

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent/>);