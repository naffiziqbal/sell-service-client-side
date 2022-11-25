import React from "react";

const Product = ({ product }) => {
  const { name, img, category } = product;
  return (
    <div className="card bg-base-100 shadow-xl w-96">
      <figure className="">
        <img className="object-contain" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>{category}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Advertise Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
