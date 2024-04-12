const heading = React.createElement("h1", {
    id: "title"
}, "Hi, My name is Himanshu Yadav" //Children
);
const heading2 = React.createElement("h2", {
    id: "title"
}, "Hi, My name is Harshita Yadav" //Children
);
const heading3 = React.createElement("h3", {
    id: "title"
}, "Hi, My name is Him Yadav" //Children
);
const container = React.createElement("div", {
    id: "container"
}, [
    heading,
    heading2,
    heading3
]);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
//passing a react element in root
root.render(container);

//# sourceMappingURL=index.2b8d1207.js.map
