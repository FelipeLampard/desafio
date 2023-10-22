import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaGive = ({ children }) => {
  const URL = "./pizzas.json";
  const [pizzaList, setPizzaList] = useState([]);

  const takePizzas = () => {
    try {
      axios.get("./pizzas.json").then((response) => {
        console.log(response.data);
        setPizzaList(
          response.data.map((item) => ({
            ...item,
            add: false,
            detail: false,
            amount: 0,
          })
        ));
      });
      
    } catch (error) {
      if (error.response) {
        // Manejar errores de respuesta
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    takePizzas();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizza: pizzaList,
        setPizzas: setPizzaList,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaGive;
