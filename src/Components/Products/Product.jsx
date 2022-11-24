import React from "react";

const Product = ({ product }) => {
  console.log(product);
  const {category,img, name,location,originalPrice, resalePrice, sellerName, used} = product
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl flex flex-row">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p><small> {category}</small></p>
          <p>Original Price: Taka {originalPrice}</p>
          <p>Resale Price : Taka {resalePrice}</p>
          <p>Picup Location : {location}</p>
          <p> Who's Selling : {sellerName}</p>
          <p>Time Used : {used}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
