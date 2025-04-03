import React from "react";
import { Accordion, Container } from "react-bootstrap";

const Help = () => {
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">📖 Help & FAQs</h2>

      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>🛍️ How do I place an order?</Accordion.Header>
          <Accordion.Body>
            To place an order, simply browse our menu, add items to your cart, and proceed to checkout.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>🚚 What is the delivery time?</Accordion.Header>
          <Accordion.Body>
            Delivery time depends on your location. Generally, it takes between 30-60 minutes.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>💳 What payment methods do you accept?</Accordion.Header>
          <Accordion.Body>
            We accept credit/debit cards, PayPal, and cash on delivery (COD).
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>🔄 Can I cancel or modify my order?</Accordion.Header>
          <Accordion.Body>
            Yes, you can modify or cancel your order within 5 minutes after placing it. Contact support for assistance.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>📦 How do I track my order?</Accordion.Header>
          <Accordion.Body>
            You can track your order in the "My Orders" section of your account.
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="5">
          <Accordion.Header>📞 How can I contact customer support?</Accordion.Header>
          <Accordion.Body>
            You can reach us via live chat, email at support@foodie.com, or call our helpline at +1-800-FOOD.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Help;