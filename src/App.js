import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
     <HomeScreen/>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;