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

const resObj = {
    "id": "restaurantCollectionDeliveringNowTheme",
            "gridElements": {
              "infoWithStyle": {
                "@type": "type.googleapis.com/swiggy.presentation.food.v2.RestaurantInfoWithStyle",
                "restaurants": [
                  {
                    "info": {
                      "id": "145076",
                      "name": "Halli Jonne Biriyani",
                      "cloudinaryImageId": "hukiflnai1hosydergnx",
                      "locality": "4th T Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian",
                        "Biryani"
                      ],
                      "avgRating": 4.3,
                      "parentId": "21321",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=10219418~p=1~eid=0000018c-b5e4-c03a-0155-67330091016f~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "1.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=145076",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "792403",
                      "name": "Nandhana Palace",
                      "cloudinaryImageId": "502d6ccc803e95343d0324b15f8639da",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Andhra"
                      ],
                      "avgRating": 4.5,
                      "parentId": "2120",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "50+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "isNewlyOnboarded": true,
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=792403",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "599281",
                      "name": "Corner House Ice Cream",
                      "cloudinaryImageId": "mrgeiocfnopwisobukkb",
                      "locality": "5th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.7,
                      "parentId": "65254",
                      "avgRatingString": "4.7",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 9,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "9 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=599281",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "576474",
                      "name": "Aromas of Biryani",
                      "cloudinaryImageId": "7d83016d319aebcb90ac3c9c106987a3",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹600 for two",
                      "cuisines": [
                        "Biryani"
                      ],
                      "avgRating": 4.2,
                      "parentId": "36155",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=10220788~p=2~eid=0000018c-b5e4-c03a-0155-673400910245~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 0.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "13 mins",
                        "lastMileTravelString": "0.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "40% OFF",
                        "subHeader": "UPTO ₹80"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=576474",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "61983",
                      "name": "Rajathadri Food Fort",
                      "cloudinaryImageId": "jx1rhiahy7dzczsbf9jz",
                      "locality": "7th block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "473069",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:15:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "description": "pureveg",
                                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=61983",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "17297",
                      "name": "KFC",
                      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Biryani",
                        "American",
                        "Snacks",
                        "Fast Food"
                      ],
                      "avgRating": 4.1,
                      "parentId": "547",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.7,
                        "serviceability": "SERVICEABLE",
                        "slaString": "14 mins",
                        "lastMileTravelString": "0.7 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "EVERY ITEM",
                        "subHeader": "@ ₹179"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=17297",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "5271",
                      "name": "Subway",
                      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                      "locality": "5TH Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹350 for two",
                      "cuisines": [
                        "Salads",
                        "Snacks",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.4,
                      "parentId": "2",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=9982239~p=3~eid=0000018c-b5e4-c03a-0155-673500910379~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "13 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=5271",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "655",
                      "name": "Meghana Foods",
                      "cloudinaryImageId": "x4uyxvihmg8qa3pddkgf",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Biryani",
                        "Andhra",
                        "South Indian",
                        "North Indian",
                        "Chinese",
                        "Seafood"
                      ],
                      "avgRating": 4.5,
                      "parentId": "635",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 11,
                        "lastMileTravel": 0.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "11 mins",
                        "lastMileTravelString": "0.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 01:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=655",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "495510",
                      "name": "La Pino'z Pizza",
                      "cloudinaryImageId": "nln9ubwxhtwv60rjpvlm",
                      "locality": "5th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Pizzas",
                        "Pastas",
                        "Italian",
                        "Desserts",
                        "Beverages"
                      ],
                      "avgRating": 4.2,
                      "veg": true,
                      "parentId": "4961",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ],
                        "textExtendedBadges": [
                          {
                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                            "shortDescription": "Kids Favourite options",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                  "description": "",
                                  "shortDescription": "Kids Favourite options",
                                  "fontColor": "#7E808C"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=495510",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "369642",
                      "name": "Basaveshwar Khanavali",
                      "cloudinaryImageId": "ojmkakt4nm1rvnqr8ufr",
                      "locality": "3rd Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Indian"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "42124",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "promoted": true,
                      "adTrackingId": "cid=10218117~p=5~eid=0000018c-b5e4-c03a-0155-673700910572~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "ABOVE ₹700",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=369642",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "531453",
                      "name": "Basaveshwar Khanavali",
                      "cloudinaryImageId": "vmqjdiqqdttkwak25c92",
                      "locality": "4th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹500 for two",
                      "cuisines": [
                        "Indian"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "463758",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 18,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "18 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 00:00:00",
                        "opened": true
                      },
                      "badges": {
                        "imageBadges": [
                          {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                                  "description": "pureveg"
                                }
                              }
                            ]
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=531453",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "627097",
                      "name": "RR Vatika-Punjabi Dhaba",
                      "cloudinaryImageId": "ffd0efb90fcf741a15831ad7b493b8a7",
                      "locality": "Jayanagar",
                      "areaName": "Basavanagudi",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "North Indian",
                        "Chaat",
                        "Chinese",
                        "Thalis"
                      ],
                      "avgRating": 4.1,
                      "veg": true,
                      "parentId": "21549",
                      "avgRatingString": "4.1",
                      "totalRatingsString": "100+",
                      "sla": {
                        "deliveryTime": 12,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "12 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "15% OFF",
                        "subHeader": "UPTO ₹45"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=627097",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "15858",
                      "name": "Rolls On Wheels",
                      "cloudinaryImageId": "fdf01888e6690b8a0da4f165d1e800bc",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Fast Food",
                        "North Indian",
                        "Snacks",
                        "Bengali",
                        "Kebabs",
                        "Beverages",
                        "Healthy Food",
                        "Chinese"
                      ],
                      "avgRating": 4.2,
                      "parentId": "784",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=10132383~p=6~eid=0000018c-b5e4-c03a-0155-673800910661~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 23:59:00",
                        "opened": true
                      },
                      "badges": {
                        "textExtendedBadges": [
                          {
                            "iconId": "guiltfree/GF_Logo_android_3x",
                            "shortDescription": "options available",
                            "fontColor": "#7E808C"
                          }
                        ]
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            "badgeObject": [
                              {
                                "attributes": {
                                  "iconId": "guiltfree/GF_Logo_android_3x",
                                  "description": "",
                                  "shortDescription": "options available",
                                  "fontColor": "#7E808C"
                                }
                              }
                            ]
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "50% OFF",
                        "subHeader": "UPTO ₹100"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=15858",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "140149",
                      "name": "Milano Ice Cream",
                      "cloudinaryImageId": "rogcrnbazdiideb9fp5h",
                      "locality": "5th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Ice Cream",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "20072",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 00:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=140149",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "412840",
                      "name": "Natraj Chole Bhature",
                      "cloudinaryImageId": "jusmt8jezjmt2dfhbas3",
                      "locality": "4th Block East",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹299 for two",
                      "cuisines": [
                        "Indian",
                        "Chaat",
                        "Sweets"
                      ],
                      "avgRating": 4.3,
                      "veg": true,
                      "parentId": "14435",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 0.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "13 mins",
                        "lastMileTravelString": "0.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 21:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=412840",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "15250",
                      "name": "The Ganache Factory - Cakes & Desserts",
                      "cloudinaryImageId": "044a0f78212f0ee3ed0293b7a0cd7d8a",
                      "locality": "8th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Desserts",
                        "Bakery",
                        "Ice Cream",
                        "Cakes and Pastries"
                      ],
                      "avgRating": 4.5,
                      "parentId": "471291",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=10242134~p=7~eid=0000018c-b5e4-c03a-0155-673900910760~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.5,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "1.5 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "UPTO ₹40"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=15250",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "23691",
                      "name": "McDonald's",
                      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                      "locality": "4th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Burgers",
                        "Beverages",
                        "Cafe",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "parentId": "630",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 0.6,
                        "serviceability": "SERVICEABLE",
                        "slaString": "13 mins",
                        "lastMileTravelString": "0.6 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 02:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=23691",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "47493",
                      "name": "Hari Super Sandwich (3rd Block)",
                      "cloudinaryImageId": "ml1ituszk5qurjia3r9h",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹100 for two",
                      "cuisines": [
                        "Chaat",
                        "Snacks",
                        "Pizzas",
                        "North Indian",
                        "Indian"
                      ],
                      "avgRating": 4.2,
                      "parentId": "352495",
                      "avgRatingString": "4.2",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 21:25:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=47493",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "488779",
                      "name": "Chaayos Chai+Snacks=Relax",
                      "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
                      "locality": "4th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹250 for two",
                      "cuisines": [
                        "Bakery",
                        "Beverages",
                        "Chaat",
                        "Desserts",
                        "Home Food",
                        "Italian",
                        "Maharashtrian",
                        "Snacks",
                        "Street Food",
                        "Sweets"
                      ],
                      "avgRating": 4.4,
                      "parentId": "281782",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "500+",
                      "promoted": true,
                      "adTrackingId": "cid=9627948~p=9~eid=0000018c-b5e4-c03a-0155-673b0091094d~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 13,
                        "lastMileTravel": 0.2,
                        "serviceability": "SERVICEABLE",
                        "slaString": "13 mins",
                        "lastMileTravelString": "0.2 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-30 01:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "60% OFF",
                        "subHeader": "UPTO ₹120"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=488779",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "204706",
                      "name": "New Shanti Upahar",
                      "cloudinaryImageId": "lpgx2sptvqrjw5yggtau",
                      "locality": "4th T Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.5,
                      "veg": true,
                      "parentId": "20082",
                      "avgRatingString": "4.5",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 15,
                        "lastMileTravel": 0.9,
                        "serviceability": "SERVICEABLE",
                        "slaString": "15 mins",
                        "lastMileTravelString": "0.9 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹299",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=204706",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "108108",
                      "name": "Kabab Magic",
                      "cloudinaryImageId": "vbbxvr4eaf30qo7eai9j",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "Chinese",
                        "South Indian",
                        "North Indian",
                        "Fast Food",
                        "Mexican",
                        "Kerala"
                      ],
                      "avgRating": 4.3,
                      "parentId": "527",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "promoted": true,
                      "adTrackingId": "cid=10218246~p=10~eid=0000018c-b5e4-c03a-0155-673c00910a23~srvts=1703858716730~45826",
                      "sla": {
                        "deliveryTime": 17,
                        "lastMileTravel": 1.1,
                        "serviceability": "SERVICEABLE",
                        "slaString": "17 mins",
                        "lastMileTravelString": "1.1 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 23:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=108108",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "640626",
                      "name": "New Biryani Centre",
                      "cloudinaryImageId": "t3sawlhx62w8akybnltb",
                      "locality": "3rd Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "Biryani",
                        "Fast Food"
                      ],
                      "avgRating": 4.4,
                      "parentId": "146012",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "50+",
                      "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "14 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 21:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "₹100 OFF",
                        "subHeader": "ABOVE ₹999",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=640626",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "70490",
                      "name": "Ranganna Military Hotel",
                      "cloudinaryImageId": "sabap2fm1s0kwuwdyxgw",
                      "locality": "Jayanagar",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹300 for two",
                      "cuisines": [
                        "South Indian"
                      ],
                      "avgRating": 4.3,
                      "parentId": "21639",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "10K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 1.3,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "1.3 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:00:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=70490",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "109504",
                      "name": "New Udupi Upahar",
                      "cloudinaryImageId": "foi9uaedp3w9bdj2mtq2",
                      "locality": "5th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹200 for two",
                      "cuisines": [
                        "South Indian",
                        "North Indian",
                        "Chinese",
                        "Chaat",
                        "Juices",
                        "Beverages"
                      ],
                      "avgRating": 4.3,
                      "parentId": "14579",
                      "avgRatingString": "4.3",
                      "totalRatingsString": "5K+",
                      "sla": {
                        "deliveryTime": 16,
                        "lastMileTravel": 0.8,
                        "serviceability": "SERVICEABLE",
                        "slaString": "16 mins",
                        "lastMileTravelString": "0.8 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:45:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "aggregatedDiscountInfoV2": {
                        
                      },
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "textBased": {
                            
                          },
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          }
                        }
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=109504",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  },
                  {
                    "info": {
                      "id": "95589",
                      "name": "Upahara Darshini",
                      "cloudinaryImageId": "evyzpenlblntpxbbapef",
                      "locality": "4Th Block",
                      "areaName": "Jayanagar",
                      "costForTwo": "₹400 for two",
                      "cuisines": [
                        "Chinese",
                        "South Indian",
                        "North Indian",
                        "Desserts"
                      ],
                      "avgRating": 4.4,
                      "veg": true,
                      "parentId": "7538",
                      "avgRatingString": "4.4",
                      "totalRatingsString": "1K+",
                      "sla": {
                        "deliveryTime": 14,
                        "lastMileTravel": 0.4,
                        "serviceability": "SERVICEABLE",
                        "slaString": "14 mins",
                        "lastMileTravelString": "0.4 km",
                        "iconType": "ICON_TYPE_EMPTY"
                      },
                      "availability": {
                        "nextCloseTime": "2023-12-29 22:30:00",
                        "opened": true
                      },
                      "badges": {
                        
                      },
                      "isOpen": true,
                      "type": "F",
                      "badgesV2": {
                        "entityBadges": {
                          "imageBased": {
                            
                          },
                          "textExtendedBadges": {
                            
                          },
                          "textBased": {
                            
                          }
                        }
                      },
                      "aggregatedDiscountInfoV3": {
                        "header": "10% OFF",
                        "subHeader": "ABOVE ₹600",
                        "discountTag": "FLAT DEAL"
                      },
                      "differentiatedUi": {
                        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                        "differentiatedUiMediaDetails": {
                          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                          "lottie": {
                            
                          },
                          "video": {
                            
                          }
                        }
                      },
                      "reviewsSummary": {
                        
                      },
                      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                      "restaurantOfferPresentationInfo": {
                        
                      }
                    },
                    "analytics": {
                      
                    },
                    "cta": {
                      "link": "swiggy://menu?restaurant_id=95589",
                      "text": "RESTAURANT_MENU",
                      "type": "DEEPLINK"
                    }
                  }
                ],
                "theme": "DELIVERING_NOW",
                "collectionId": "45826"
              }
            }
}


const resList = [
  {
    "info": {
      "id": "145076",
      "name": "Halli Jonne Biriyani",
      "cloudinaryImageId": "hukiflnai1hosydergnx",
      "locality": "4th T Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "Biryani"
      ],
      "avgRating": 4.3,
      "parentId": "21321",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=10219418~p=1~eid=0000018c-b5e4-c03a-0155-67330091016f~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.4,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=145076",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "792403",
      "name": "Nandhana Palace",
      "cloudinaryImageId": "502d6ccc803e95343d0324b15f8639da",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Andhra"
      ],
      "avgRating": 4.5,
      "parentId": "2120",
      "avgRatingString": "4.5",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "isNewlyOnboarded": true,
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=792403",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "599281",
      "name": "Corner House Ice Cream",
      "cloudinaryImageId": "mrgeiocfnopwisobukkb",
      "locality": "5th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.7,
      "parentId": "65254",
      "avgRatingString": "4.7",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 9,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "9 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=599281",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "576474",
      "name": "Aromas of Biryani",
      "cloudinaryImageId": "7d83016d319aebcb90ac3c9c106987a3",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹600 for two",
      "cuisines": [
        "Biryani"
      ],
      "avgRating": 4.2,
      "parentId": "36155",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=10220788~p=2~eid=0000018c-b5e4-c03a-0155-673400910245~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.3,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=576474",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "61983",
      "name": "Rajathadri Food Fort",
      "cloudinaryImageId": "jx1rhiahy7dzczsbf9jz",
      "locality": "7th block",
      "areaName": "Jayanagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "473069",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:15:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=61983",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "17297",
      "name": "KFC",
      "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "avgRating": 4.1,
      "parentId": "547",
      "avgRatingString": "4.1",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.7,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "lastMileTravelString": "0.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "EVERY ITEM",
        "subHeader": "@ ₹179"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=17297",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "5271",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "5TH Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "Salads",
        "Snacks",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.4,
      "parentId": "2",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=9982239~p=3~eid=0000018c-b5e4-c03a-0155-673500910379~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=5271",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "655",
      "name": "Meghana Foods",
      "cloudinaryImageId": "x4uyxvihmg8qa3pddkgf",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood"
      ],
      "avgRating": 4.5,
      "parentId": "635",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 11,
        "lastMileTravel": 0.1,
        "serviceability": "SERVICEABLE",
        "slaString": "11 mins",
        "lastMileTravelString": "0.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 01:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=655",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "495510",
      "name": "La Pino'z Pizza",
      "cloudinaryImageId": "nln9ubwxhtwv60rjpvlm",
      "locality": "5th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "4961",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ],
        "textExtendedBadges": [
          {
            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
            "shortDescription": "Kids Favourite options",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                  "description": "",
                  "shortDescription": "Kids Favourite options",
                  "fontColor": "#7E808C"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=495510",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "369642",
      "name": "Basaveshwar Khanavali",
      "cloudinaryImageId": "ojmkakt4nm1rvnqr8ufr",
      "locality": "3rd Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "42124",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "promoted": true,
      "adTrackingId": "cid=10218117~p=5~eid=0000018c-b5e4-c03a-0155-673700910572~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:30:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹700",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=369642",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "531453",
      "name": "Basaveshwar Khanavali",
      "cloudinaryImageId": "vmqjdiqqdttkwak25c92",
      "locality": "4th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "463758",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 18,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "18 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=531453",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "627097",
      "name": "RR Vatika-Punjabi Dhaba",
      "cloudinaryImageId": "ffd0efb90fcf741a15831ad7b493b8a7",
      "locality": "Jayanagar",
      "areaName": "Basavanagudi",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "North Indian",
        "Chaat",
        "Chinese",
        "Thalis"
      ],
      "avgRating": 4.1,
      "veg": true,
      "parentId": "21549",
      "avgRatingString": "4.1",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 12,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "12 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹45"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=627097",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "15858",
      "name": "Rolls On Wheels",
      "cloudinaryImageId": "fdf01888e6690b8a0da4f165d1e800bc",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Fast Food",
        "North Indian",
        "Snacks",
        "Bengali",
        "Kebabs",
        "Beverages",
        "Healthy Food",
        "Chinese"
      ],
      "avgRating": 4.2,
      "parentId": "784",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=10132383~p=6~eid=0000018c-b5e4-c03a-0155-673800910661~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:59:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "description": "",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=15858",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "140149",
      "name": "Milano Ice Cream",
      "cloudinaryImageId": "rogcrnbazdiideb9fp5h",
      "locality": "5th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "20072",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 00:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=140149",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "412840",
      "name": "Natraj Chole Bhature",
      "cloudinaryImageId": "jusmt8jezjmt2dfhbas3",
      "locality": "4th Block East",
      "areaName": "Jayanagar",
      "costForTwo": "₹299 for two",
      "cuisines": [
        "Indian",
        "Chaat",
        "Sweets"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "14435",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=412840",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "15250",
      "name": "The Ganache Factory - Cakes & Desserts",
      "cloudinaryImageId": "044a0f78212f0ee3ed0293b7a0cd7d8a",
      "locality": "8th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Desserts",
        "Bakery",
        "Ice Cream",
        "Cakes and Pastries"
      ],
      "avgRating": 4.5,
      "parentId": "471291",
      "avgRatingString": "4.5",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=10242134~p=7~eid=0000018c-b5e4-c03a-0155-673900910760~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=15250",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "23691",
      "name": "McDonald's",
      "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
      "locality": "4th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Burgers",
        "Beverages",
        "Cafe",
        "Desserts"
      ],
      "avgRating": 4.4,
      "parentId": "630",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 02:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=23691",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "47493",
      "name": "Hari Super Sandwich (3rd Block)",
      "cloudinaryImageId": "ml1ituszk5qurjia3r9h",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Chaat",
        "Snacks",
        "Pizzas",
        "North Indian",
        "Indian"
      ],
      "avgRating": 4.2,
      "parentId": "352495",
      "avgRatingString": "4.2",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.2,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 21:25:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=47493",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "488779",
      "name": "Chaayos Chai+Snacks=Relax",
      "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
      "locality": "4th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Bakery",
        "Beverages",
        "Chaat",
        "Desserts",
        "Home Food",
        "Italian",
        "Maharashtrian",
        "Snacks",
        "Street Food",
        "Sweets"
      ],
      "avgRating": 4.4,
      "parentId": "281782",
      "avgRatingString": "4.4",
      "totalRatingsString": "500+",
      "promoted": true,
      "adTrackingId": "cid=9627948~p=9~eid=0000018c-b5e4-c03a-0155-673b0091094d~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 13,
        "lastMileTravel": 0.2,
        "serviceability": "SERVICEABLE",
        "slaString": "13 mins",
        "lastMileTravelString": "0.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-30 01:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "60% OFF",
        "subHeader": "UPTO ₹120"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=488779",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "204706",
      "name": "New Shanti Upahar",
      "cloudinaryImageId": "lpgx2sptvqrjw5yggtau",
      "locality": "4th T Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.5,
      "veg": true,
      "parentId": "20082",
      "avgRatingString": "4.5",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 15,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "15 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹299",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=204706",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "108108",
      "name": "Kabab Magic",
      "cloudinaryImageId": "vbbxvr4eaf30qo7eai9j",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian",
        "Fast Food",
        "Mexican",
        "Kerala"
      ],
      "avgRating": 4.3,
      "parentId": "527",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "promoted": true,
      "adTrackingId": "cid=10218246~p=10~eid=0000018c-b5e4-c03a-0155-673c00910a23~srvts=1703858716730~45826",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 1.1,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "1.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 23:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=108108",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "640626",
      "name": "New Biryani Centre",
      "cloudinaryImageId": "t3sawlhx62w8akybnltb",
      "locality": "3rd Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Biryani",
        "Fast Food"
      ],
      "avgRating": 4.4,
      "parentId": "146012",
      "avgRatingString": "4.4",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 21:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹100 OFF",
        "subHeader": "ABOVE ₹999",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=640626",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "70490",
      "name": "Ranganna Military Hotel",
      "cloudinaryImageId": "sabap2fm1s0kwuwdyxgw",
      "locality": "Jayanagar",
      "areaName": "Jayanagar",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.3,
      "parentId": "21639",
      "avgRatingString": "4.3",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 1.3,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "1.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=70490",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "109504",
      "name": "New Udupi Upahar",
      "cloudinaryImageId": "foi9uaedp3w9bdj2mtq2",
      "locality": "5th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Chinese",
        "Chaat",
        "Juices",
        "Beverages"
      ],
      "avgRating": 4.3,
      "parentId": "14579",
      "avgRatingString": "4.3",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 16,
        "lastMileTravel": 0.8,
        "serviceability": "SERVICEABLE",
        "slaString": "16 mins",
        "lastMileTravelString": "0.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:45:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=109504",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  },
  {
    "info": {
      "id": "95589",
      "name": "Upahara Darshini",
      "cloudinaryImageId": "evyzpenlblntpxbbapef",
      "locality": "4Th Block",
      "areaName": "Jayanagar",
      "costForTwo": "₹400 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "North Indian",
        "Desserts"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "7538",
      "avgRatingString": "4.4",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 14,
        "lastMileTravel": 0.4,
        "serviceability": "SERVICEABLE",
        "slaString": "14 mins",
        "lastMileTravelString": "0.4 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2023-12-29 22:30:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "ABOVE ₹600",
        "discountTag": "FLAT DEAL"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=95589",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    }
  }
];

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
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/" + cloudinaryImageId}  alt="res-logo" className="res-logo"></img>  
          </div>
          <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{resData.info.sla.deliveryTime}</h4>

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
              {resList.map((restaurants)=>(
                <RestaurantCard key={restaurants.info.id} resData={restaurants}/>
              ))}
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
