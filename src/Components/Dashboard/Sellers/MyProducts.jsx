import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../UserContext/UserContext";
import Product from "./Product";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const productsData = products.data;

  useEffect(() => {
    axios
      .get(`https://second-sell.vercel.app/categories/${user.email}`)
      .then((res) => setProducts(res));
  }, [user.email]);

  return (
    <div>
      <h3 className="text-xl">My Products</h3>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
        productsData?.map((product) => (
          <Product key={product._id} 
          product = {product}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProducts;
