import { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

const List = () => {
  const { pizza, cart } = useContext(PizzaContext);
  const { id } = useParams();
  const selectedPizza = pizza.find((p) => p.id === id);
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.amount, 0);
  };

  if (!selectedPizza) {
    return <div>Pizza no encontrada</div>;
  }

  return (
    <>
      <Card className="mx-auto px-auto py-auto" style={{ maxWidth: "400px" }}>
        <Card.Img src={selectedPizza.img} alt={selectedPizza.name} />
        <Card.Body>
          <Card.Title>{selectedPizza.name}</Card.Title>
          <hr />
          <Card.Text>{selectedPizza.desc}</Card.Text>
          <Card.Text className="text-center">${selectedPizza.price}</Card.Text>
          <Button onClick={() => addToCart(selectedPizza)}>🛒 Agregar</Button>
        </Card.Body>
        {cart.map((item) => (
          <div key={item.id}>
            <p>
              {item.name} - ${item.price} x {item.amount}
            </p>
            <p>Total a pagar: ${calculateTotal()}</p>
          </div>
        ))}
      </Card>
    </>
  );
};

export default List;
