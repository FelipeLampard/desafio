import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

const Cards = ({ id, img, name, ingredients, price }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            {ingredients}
          </Card.Text>
          <Card.Text>{price} </Card.Text>
          <Button variant="primary" onClick={()=> {navigate(`/Pizza/${id}`)}}>Ver mas</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
