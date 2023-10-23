import React, { useState } from "react";

function Pedido() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarAlPedido = (nombre, precio) => {
    const nuevoItem = { nombre, precio };
    setItems([...items, nuevoItem]);
    setTotal(total + precio);
  };

  return (
    <div className="text-center">
      <h2>Detalle del Pedido</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.nombre} - ${item.precio}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Pedido;
