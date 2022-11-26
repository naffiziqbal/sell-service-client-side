import React, { useState } from "react";
import { Link } from "react-router-dom";

const Category = ({ category }) => {
  const { name, title, description, img, _id } = category;

  // const newCat = category.category

  // console.log(category);
  // console.log(category);
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Bike" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {title}
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">
              <Link to={`/products/${category.category}`}>
                See Category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
