import React,{useEffect, useState} from "react";
import { getRestaurants } from "../services/restaurantsServices";
import FoodCard from "../components/FoodCard";
import axios from 'axios';
import { RESTAURANTS } from '../constants'; 

import { Col, Container, Row } from 'react-bootstrap'


import Image1 from "../assets/menu/burger-11.jpg"
import Image2 from "../assets/menu/burger-12.jpg"
import Image3 from "../assets/menu/burger-13.jpg"
import Image4 from "../assets/menu/burger-14.jpg"
import Image5 from "../assets/menu/burger-15.jpg"
import Image6 from "../assets/menu/burger-16.jpg"
import Image7 from "../assets/menu/burger-17.jpg"
import Image8 from "../assets/menu/burger-18.jpg"
import Image9 from "../assets/menu/pizza_1.jpg"
import Image10 from "../assets/menu/pizza_2.jpg"
import Image11 from "../assets/menu/pizza_3.jpg"
import Image12 from "../assets/menu/pizza_4.jpg"
import Image13 from "../assets/menu/biryani_1.jpg"
import Image14 from "../assets/menu/biryani_2.jpg"
import Image15 from "../assets/menu/biryani_3.jpg"
import Image16 from "../assets/menu/biryani_4.jpg"
import Image17 from "../assets/menu/biryani_5.jpg"
import Card from '../components/Card'


// type Food = {
//   name: string;
//   category: string;
//   price: number;
//   image: string;
// }

const mockData = [
  {
    id: "0001",
    image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, coleslaw",
    rating: 5,
    price: 99.15,
    category: "Burger",
  },
  {
    id: "0002",
    image: Image2,
    title: "Ultimate Bacon",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 4.5,
    price: 99.32,
    category: "Burger",

  },
  {
    id: "0003",
    image: Image3,
    title: "Black Sheep",
    paragraph: "American cheese, tomato relish, avocado, lettuce, red onion",
    rating: 4,
    price: 69.15,
    category: "Burger",

  },
  {
    id: "0004",
    image: Image4,
    title: "Vegan Burger",
    paragraph: "House patty, cheddar cheese, bacon, onion, mustard",
    rating: 3.5,
    price: 99.25,
    category: "Burger",

  },
  {
    id: "0005",
    image: Image5,
    title: "Double Burger",
    paragraph: "2 patties, cheddar cheese, mustard, pickles, tomatoes",
    rating: 3.0,
    price: 59.25,
    category: "Burger",

  },
  {
    id: "0006",
    image: Image6,
    title: "Turkey Burger",
    paragraph: "Turkey, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 3,
    price: 79.18,
    category: "Burger",

  },
  {
    id: "0007",
    image: Image7,
    title: "Smokey House",
    paragraph: "patty, cheddar cheese, onion, lettuce, tomatoes, pickles",
    rating: 2.5,
    price: 99.19,
    category: "Burger",

  },
  {
    id: "0008",
    image: Image8,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Burger",

  },
  {
    id: "0009",
    image: Image9 ,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  {
    id: "00010",
    image: Image10,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",
     },
  {
    id: "00011",
    image: Image11,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",
  },
  {
    id: "00012",
    image: Image12,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  {
    id: "00013",
    image: Image13,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  {
    id: "00014",
    image: Image14,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  {
    id: "00015",
    image: Image15,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  {
    id: "00016",
    image: Image16,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  {
    id: "00017",
    image: Image17,
    title: "Classic Burger",
    paragraph: "cheddar cheese, ketchup, mustard, pickles, onion",
    rating: 2.0,
    price: 89.12,
    category: "Pizza",

  },
  // Add more mock data objects as needed
];
// const foodItem = {
//   name: "Cheese Burger",
//   description: "A delicious cheeseburger with fresh ingredients.",
//   price: 8.99,
//   image: "https://via.placeholder.com/150" // Replace with an actual image URL
// };
const HomeScreen = () => {
  const [Menu,setMenu]=useState([]);
  const [restaurant,setRestaurant] = useState(""); 
  const renderRatingIcons = (rating) => {
      const stars = [];
      for(let i = 0; i<5; i++)
      {
          if(rating>0.5)
          {
              stars.push(<i key={i} className="bi bi-star-fill"></i>);
              rating--;
          }
          else if(rating>0 && rating<1)
          {
              stars.push(<i key={"half"} className="bi bi-star-half"></i>);
              rating--;

          }
          else{
              stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
          }
      }
      return stars;
  }


    // useEffect(() => {
    //             axios.get(RESTAURANTS)
    //         .then((response)=>
    //         {
    //             console.log(response.data);
    //             setRestaurant(response.data);

    //            console.log("data===",restaurant);
    //          //  console.log("data.restaurants===",restaurants.restaurants);
    //          restaurant?.restaurants?.map((restaurant) => 
    //            (console.log("restaurant.name===",restaurant.name)));
               

    //             //   const firstRestaurantMenu = response.data.restaurants[0].menu;
    //             // console.log("First restaurant menu:", firstRestaurantMenu);
    //             //  setMenu(firstRestaurantMenu);
    //             //  console.log("Menu:=====", Menu);
              
    //         }).catch((error)=>
    //         {
    //             console.log(error);
    //         });
            
    // });	
  return (
   // restaurant.restaurants?.map((restaurant) => (
      // <div key={restaurant.id}>
      //   <h2>{restaurant.name}</h2>
      <div className="home_screen">
        <Container>
            <Row>
                <Col lg={{span:8,offset:2}} className='text-center mb-5'>
                    <h2>Our Burgers</h2>
                    <p className='para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore doloremque sed tempore officiis laboriosam omnis sapiente hic delectus consequuntur illum!</p>
                    
                </Col>
            </Row>

            <Row>
                {
                    mockData.map((cardData,index)=>(
                        <Card key={index} 
                        image={cardData.image} 
                        title={cardData.title}
                        rating = {cardData.rating}
                        para = {cardData.paragraph}
                        price = {cardData.price}
                        renderRatingIcons = {renderRatingIcons}
                        />
                    )
                )}
                
            </Row>

           

        </Container>
        {/* <ul>
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
        </ul> */}
      </div>
   // ))
  //   <div>
      
  //  {/* // <FoodCard food={Food} /> */}
  //   </div>
  );
};
export default HomeScreen;