import React from "react";
import  ReactDOM  from "react-dom/client";

const parent = React.createElement("div",{},"This is a parent")

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById('root'))

const jsxheading = <h1>This is a REACT from JSX ✈️</h1>

const number = 1000

//Functional Component
const Title = () =>(
    <h1>Functional Component Title</h1>
);

const HeadingComponent = () => (
    <div>
    <h2>
        {number}
    </h2>
    <Title />
    <h1>This is a REACT Functional Component 🚙</h1>
    </div>
);

console.log(HeadingComponent)

root.render(<HeadingComponent />)