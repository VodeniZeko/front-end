import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleItem from "./SingleItem";
import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "../actions/Apicalls";

const ItemList = () => {
  // const [products, setProducts] = useState([]);
  const products = useSelector(state => state.data);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("https://rickandmortyapi.com/api/character/")
  //     .then(res => {
  //       setProducts(res.data.results);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    dispatch(Fetch());
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
