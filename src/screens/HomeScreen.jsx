import React,{useEffect, useState} from "react";
import { getRestaurants } from "../services/restaurantsServices";
import FoodCard from "../components/FoodCard";
import axios from 'axios';
import { RESTAURANTS } from '../constants'; 


type Food = {
  name: string;
  category: string;
  price: number;
  image: string;
}
// const foodItem = {
//   name: "Cheese Burger",
//   description: "A delicious cheeseburger with fresh ingredients.",
//   price: 8.99,
//   image: "https://via.placeholder.com/150" // Replace with an actual image URL
// };
const HomeScreen = () => {
  const [Menu,setMenu]=useState([]);
  const [restaurant,setRestaurant] = useState(""); 
    useEffect(() => {
                axios.get(RESTAURANTS)
            .then((response)=>
            {
                console.log(response.data);
                setRestaurant(response.data);

               console.log("data===",restaurant);
             //  console.log("data.restaurants===",restaurants.restaurants);
             restaurant?.restaurants?.map((restaurant) => 
               (console.log("restaurant.name===",restaurant.name)));
               

                //   const firstRestaurantMenu = response.data.restaurants[0].menu;
                // console.log("First restaurant menu:", firstRestaurantMenu);
                //  setMenu(firstRestaurantMenu);
                //  console.log("Menu:=====", Menu);
              
            }).catch((error)=>
            {
                console.log(error);
            });
            
    });	
  return (
    restaurant.restaurants?.map((restaurant) => (
      <div key={restaurant.id}>
        <h2>{restaurant.name}</h2>
        <ul>
          {restaurant.menu.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - ${item.price} ({item.category})
              <br />
              <img
                src={item.image}
                alt={item.name}
                width={100}
                style={{ borderRadius: '8px', marginTop: '5px' }}
              />
            </li>
          ))}
        </ul>
      </div>
    ))
  //   <div>
      
  //  {/* // <FoodCard food={Food} /> */}
  //   </div>
  );
};
export default HomeScreen;