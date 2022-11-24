import axios from "axios";
import React, { useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);



  return (
    <div>
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
