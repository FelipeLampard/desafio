import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../context/PizzaContext";


const Pizza = () => {
  const { id } = useParams();
  const { pizza } = useContext(PizzaContext);
  const [selectPizza, setSelectPizza] = useState({});

  const info = () => {
    const infoPizza = pizza.find((p) => p.id === id);
    setSelectPizza(infoPizza);
  };

  useEffect(() => {
    info();
  }, [id, pizza]); 

  return (
    <div>
      
    </div>
  );
};

export default Pizza;
