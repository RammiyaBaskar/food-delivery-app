import React from "react";
import { Card, Button } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";

const FoodCard = ({ food }) => {
  return (
    <Card className="w-80 shadow-lg overflow-hidden">
      <Card.Img variant="top" src={food.image} alt={food.name} className="h-48 object-cover" />
      <Card.Body>
        <Card.Title>{food.name}</Card.Title>
        <Card.Text className="text-muted">{food.description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <span className="fw-bold">${food.price}</span>
          <Button variant="primary" className="d-flex align-items-center gap-2">
            <FaShoppingCart /> Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default FoodCard;