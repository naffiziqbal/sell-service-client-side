import React, { useRef, useState } from "react";

import { StarIcon } from "@heroicons/react/24/solid";

const SwiperReview = ({ review }) => {
  const { reviewName, reviewerImg, message, ratings } = review;

  
  return (
        <div className="  card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{reviewName}</h2>
            <span>
                {ratings === "five"}
                </span>
            <p>{message}</p>
          </div>
        </div>
  );
};

export default SwiperReview;
