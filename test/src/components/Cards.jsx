import React, { useContext } from "react";
import { PizzaContext } from "../context/PizzaContext";

const Cards = ({ id, img, name, ingredients, price }) => {
  const { pizza } = useContext(PizzaContext);

  console.log(pizza);

  const orderPizza = (id) => {
    setPizza((list) => {
      const pickPizza = list.map((pizzaItem) => {
        if (pizzaItem.id === id) {
          return { ...pizzaItem, add: true, amount: 1 };
        } else {
          return pizzaItem;
        }
      });
      return pickPizza;
    });
  };

  return (
    <div className="pizza-cards">
      {pizza.map((p) => (
        <div key={p.id} className="card">
          <img src={p.img} alt={p.name} />
          <div className="card-details">
            <h2>{p.name}</h2>
            <p>{p.ingredients}</p>
            <p>${p.price}</p>
            <button onClick={() => orderPizza(p.id)}>Ver mas</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
