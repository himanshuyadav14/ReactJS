/*
Parcel has -> Hot Module Reloading (HMR)
File Watcher Algorithms - C++
BUNDLING
MINIFY
Cleaning our code
It manages dev and production built
Superfast build algorithms
*/
const heading = React.createElement(
  "h1", //Element Type
  { id: "title" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
  "Hi, My name is Himanshu Yadav" //Children
);
console.log(heading);

const heading2 = React.createElement(
  "h2", //Element Type
  { id: "title" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
  "Hi, My name is Harshita Yadav" //Children
);
console.log(heading2);

const heading3 = React.createElement(
  "h3", //Element Type
  { id: "title" }, //Props Object ==>> Like in html we will give id and class. So here in react we give those props here
  "Hi, My name is Him Yadav" //Children
);
console.log(heading3);
const container = React.createElement("div", { id: "container" }, [
  heading,
  heading2,
  heading3,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//   passing a react element in root
root.render(container);
