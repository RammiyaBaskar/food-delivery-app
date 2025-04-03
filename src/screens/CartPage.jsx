import React, { useState } from "react";
import { Table, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Sample cart data (Replace with actual state management like Redux or Context API)
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", price: 5, quantity: 1, image: "https://via.placeholder.com/80" },
    { id: 2, name: "Pizza", price: 10, quantity: 2, image: "https://via.placeholder.com/80" },
  ]);

  // Function to update quantity
  const updateQuantity = (id, qty) => {
    setCartItems(cartItems.map(item => item.id === id ? { ...item, quantity: qty } : item));
  };

  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <h5 className="text-center">Your cart is empty. <Link to="/">Go Shopping</Link></h5>
      ) : (
        <>
          {/* Cart Table */}
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} width="50" /></td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button variant="light" size="sm" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>-</Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button variant="light" size="sm" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  </td>
                  <td>${item.price * item.quantity}</td>
                  <td>
                    <Button variant="danger" size="sm" onClick={() => removeItem(item.id)}>🗑️</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          {/* Cart Summary */}
          <div className="d-flex justify-content-between align-items-center mt-3">
            <h4>Total: ${totalPrice}</h4>
            <Link to="/checkout">
              <Button variant="success">Proceed to Checkout</Button>
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;