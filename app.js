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

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img className="logo-container" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnn4m1Ap6mClU9fZq6esWlK8E6vIvB5mKk2T9XCxzs4QhA5LeOXh3EVy_HrM1_lgXDTxY&usqp=CAU"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = ({resName, cusine}) =>{

    return (
        <div className="res-card">
               <div className="res-container">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvo1djhbwrgfqd64k0tl" className="res-logo" alt="res-logo"></img>
                </div>
            <h3>
                {resName}
            </h3>
            <h4>{cusine}</h4>
            <h4>4.4 Stars</h4>
            <h4>30 Mintues</h4>
        </div>
    );
}

const Body=()=>{
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cusine="Biryani, North Indian" />
                <RestaurantCard resName="KFC" cusine="Burger, Fast Food" />
            </div>
        </div>
    )
}

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