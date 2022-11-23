import React from "react";

const Category = ({ category }) => {
    const {title, decription, img} = category
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
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{decription}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
