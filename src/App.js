import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import Help from "./screens/Help";
import CartPage from "./screens/CartPage";
import {BrowserRouter as Router, Routes,Route } from "react-router-dom";

const App = () => {
  return (
    <div>
    
      
      <Router> 
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Help" element={<Help />} />
        <Route path="/CartPage" element={<CartPage />} />
        </Routes>
        <Footer />
        </Router>
     {/* <HomeScreen/> */}
     
     
    </div>
  );
};

export default App;