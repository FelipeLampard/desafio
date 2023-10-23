import { Card, Button, Col, Row } from "react-bootstrap";
import React, { useContext, useState } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { Link, useNavigate } from "react-router-dom";


const Cards = ({ id, img, name, ingredients, price }) => {
  const { pizza, cart, setCart } = useContext(PizzaContext);
  const navigate = useNavigate();

  console.log(pizza);
  

  const addToCart = (pizzaItem) => {
    const upItem = cart.find((item) => item.id === pizzaItem.id);
    if (upItem) {
      upItem.amount += 1;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...pizzaItem, amount: 1 }]);
    }
  
  };

  

  return (
    <Row className="pizza-cards bg-dark">
      {pizza.map((p) => (
        <Col key={p.id} sm={12} md={6} lg={4}>
          <Card className="mb-3 mt-3 px-3 py-3">
            <Card.Img src={p.img} alt={p.name} />
            <Card.Body className="d-grid">
              <Card.Title className="text-center text-warning">
                {p.name.toUpperCase()}
              </Card.Title>

              <Card.Text>
                <p>
                  <ul>
                    {p.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </p>
              </Card.Text>

              <Card.Text className="text-center">${p.price}</Card.Text>
              <Card className="d-flex justify-content-between px-1">
                <Button  onClick={() => navigate(`/pizza/${p.id}`)}>
                  Ver más
                </Button>
                <Button
                  style={{
                    backgroundColor: "lightblue",
                    border: "none",
                    borderRadius: "10%",
                    padding: "5px",
                  }}
                  onClick={() => addToCart(p)}
                >
                  🛒
                </Button>
              </Card>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
