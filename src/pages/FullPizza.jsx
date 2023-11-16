import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router";
import axios from "axios";
const FullPizza= () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState({
    imageUrl: '',
    title: '',
    price: 0,
  });
  useEffect(() => {
    async function fetchPizzas() {
      try {
        const { data } = await axios.get(
          "https://64076122862956433e6de063.mockapi.io/pizzas/" + id
        );
        setPizza(data);
      } catch (error) {
        alert(`Error whith getting pizza ${error}`);
      }
    }

    fetchPizzas();
  }, []);
  if (!pizza) {
    return <div>'Loading...'</div>;
  }
  return (
    <div>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h2>{pizza.price}</h2>
      <h4>250 $</h4>
    </div>
  );
};

export default FullPizza;
