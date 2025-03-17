import React,{useEffect} from "react";
import { getRestaurants } from "../services/restaurantsServices";

const HomeScreen = () => {

    useEffect(() => {
        console.log("HomeScreen");
        getRestaurants();
    },[])	
  return (
    <div>
      <h1>Welcome to My Website</h1>
      <p>This is the main content area.</p>
    </div>
  );
};
export default HomeScreen;