// import React from "react";
// import  ReactDOM  from "react-dom/client";

// const parent = React.createElement("div",{},"This is a parent")

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const jsxheading = <h1>This is a REACT from JSX ✈️</h1>

// const number = 1000

// //Functional Component
// const Title = () =>(
//     <h1>Functional Component Title</h1>
// );

// const HeadingComponent = () => (
//     <div>
//     <h2>
//         {number}
//     </h2>
//     <Title />
//     <h1>This is a REACT Functional Component 🚙</h1>
//     </div>
// );

// console.log(HeadingComponent)

// root.render(<HeadingComponent />)

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - Restaurant Container
 *      - Restaurant Card
 *          - Img
 *          -  Name of Res, Rating, Cusines, Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body"

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<AppLayout />)
