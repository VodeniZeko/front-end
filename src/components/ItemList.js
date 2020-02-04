import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        setProducts(res.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {products.map(item => (
        <SingleItem products={item} />
      ))}
    </div>
  );
};
export default ItemList;
