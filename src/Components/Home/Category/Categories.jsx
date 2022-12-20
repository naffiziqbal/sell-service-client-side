import React, { useEffect, useState } from "react";
import { useContext } from "react";
import  { AuthContext } from "../../../UserContext/UserContext";
import Loading from "../../Loading/Loading";
import Category from "./Category";

const Categories = () => {
  const {loading, user} = useContext(AuthContext)

  const [categories, setCategories] = useState([]);

useEffect(()=>{
  fetch (`https://second-sell.vercel.app/allcategories`)
  .then(res=> res.json())
  .then(data => setCategories(data))
},[])
if(loading){
  return <Loading/>
}

  return (
    <div className=" container mx-auto">
      <p className="text-3xl text-center my-5">All Categories</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
