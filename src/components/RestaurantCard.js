import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) =>{

    const { resData }=props;  
    
    const { cloudinaryImageId, name, cuisines, avgRating}=resData?.info;

    console.log(cloudinaryImageId);

    return (
        <div className="res-card">
          
               {/* <div className="res-container">
                <img src={ "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + resList.cloudinaryImageId} className="res-logo" alt="res-logo"></img>
                </div>
            <h3>{resList.name}</h3>
            {console.log(resData.gridElements.infoWithStyle.restaurants[1].info.name)}
            <h4>{resList.cuisines[0]}</h4>
            <h4>{resList.avgRating}</h4>
            <h4>{resList.sla.deliveryTime + " Mintues"}</h4> */}
          <div className="res-container">
            <img src={ CDN_URL + cloudinaryImageId}  alt="res-logo" className="res-logo"></img>  
          </div>
          <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>

        </div>
    );
}


export default RestaurantCard;