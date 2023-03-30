import React, { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router";
import axios from "axios";
const FullPizza = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState()
  useEffect(() => {
    async function fetchPizzas(){
      const {data} = await axios.get("https://64076122862956433e6de063.mockapi.io/pizzas/" + id)
    }
  }, []);

  return (
    <div>
      <img src="" />
      <h2>{id}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quia
        corporis nesciunt! Ab, voluptatum. Commodi ex culpa nisi dolor
        repellendus, laborum deleniti quasi tempora ratione ut! Quasi recusandae
        deserunt laborum!
      </p>
      <h4>250 $</h4>
    </div>
  );
};

export default FullPizza;
