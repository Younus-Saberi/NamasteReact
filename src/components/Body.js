import RestaurantCard from "./RestaurantCard"
import resList from "../utils/mockData"
import { useState } from "react"

const Body=()=>{

  const [ listOfRestaurant, setListOfRestaurant ]=useState(resList);


    return (
        <div className="body">
            <div className="filter">
              <button className="filter-btn" 
              onClick={ ()=>{
                console.log("Button Clicked")
                const filteredRestaurant = listOfRestaurant.filter(
                  (res)=>res.avgRating > 3);
                setListOfRestaurant(filteredRestaurant)
                console.log(filteredRestaurant)
                }}>Top Rated Button</button>
            </div>
            <div className="res-container">
              {listOfRestaurant.map((restaurants)=>(
                <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
              ))}
            </div>
        </div>
    )
}

export default Body