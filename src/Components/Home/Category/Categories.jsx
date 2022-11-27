import React, { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

useEffect(()=>{
  fetch (`https://second-sell.vercel.app/allcategories`)
  .then(res=> res.json())
  .then(data => setCategories(data))
},[])

  return (
    <div className="my-20">
      <p className="text-3xl">All Categories</p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
        {categories.map((category) => (
          <Category key={category._id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
