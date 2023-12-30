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
                const filteredRestaurant = listOfRestaurant.filter((resList)=>resList.avgRating > 4);
                setListOfRestaurant(filteredRestaurant)
                }}>Top Rated Button</button>
            </div>
            <div className="res-container">
              {resList.map((restaurants)=>(
                <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
              ))}
            </div>
        </div>
    )
}

export default Body