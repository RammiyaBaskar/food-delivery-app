import React,{useEffect, useState} from "react";
import { getRestaurants } from "../services/restaurantsServices";
import FoodCard from "../components/FoodCard";



const foodItem = {
  name: "Cheese Burger",
  description: "A delicious cheeseburger with fresh ingredients.",
  price: 8.99,
  image: "https://via.placeholder.com/150" // Replace with an actual image URL
};
const HomeScreen = () => {
  const [Menu,setMenu]=useState([]);


    useEffect(() => {
        console.log("HomeScreen");
       const restaurantsData =  getRestaurants();
       const firstRestaurantMenu = restaurantsData.restaurants[0].menu;
       console.log("First restaurant menu:", firstRestaurantMenu);
        setMenu(firstRestaurantMenu);
        console.log("Menu:=====", Menu);
    },[])	
  return (
    <div>
    <FoodCard food={foodItem} />
    </div>
  );
};
export default HomeScreen;