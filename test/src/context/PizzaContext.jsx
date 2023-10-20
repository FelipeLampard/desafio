import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const PizzaContext = createContext();
const PizzaGive = ({ children }) => {
  const [pizza, setPizzas] = useState([]);
  const URL = "./pizzas.json";
  const takePizzas = async () => {
    try {
      const response = await axios.get(URL);
      if (response.status !== 200) {
        throw new Error("No hay info");
      }
      const pizza = response.data;
      setPizzas(pizza.map((item) => ({ ...item })));
      console.log(pizza);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    takePizzas();
  }, []);

  return (
    <PizzaContext.Provider
      value={{
        pizza,
        setPizzas,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaGive;
