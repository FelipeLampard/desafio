import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";


const Pizza = () => {
  const { id } = useParams();
  const { pizza } = useContext(PizzaContext);
  const [selectPizza, setSelectPizza] = useState({});

  const info = (pizza) => {
    const infoPizza = pizza.find((p) => p.id === id);
    setSelectPizza(infoPizza);
  };

  useEffect(() => {
    info();
  }, [id, pizza]); 

  return (
    <div>
      <h1>{selectPizza.name}</h1>
      <img src={selectPizza.img} alt={selectPizza.name} />
      <p>Ingredientes: {selectPizza.ingredients.join(", ")}</p>
      <p>Precio: ${selectPizza.price}</p>
      <p>Descripción: {selectPizza.desc}</p>
    </div>
  );
};

export default Pizza;
