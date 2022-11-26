import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const Review = ({ review }) => {
  const { reviewName, reviewerImg, message, ratings } = review;
  console.log(review);
  console.log(ratings);
  return (
    <div className="  card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{reviewName}</h2>
        <div className="flex">
           {ratings === "five" && (
            <>
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
            </>
          )}
           {ratings === "four" && (
            <>
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
            </>
          )}
           {ratings === "three" && (
            <>
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
            </>
          )}
           {ratings === "two" && (
            <>
              <StarIcon className="w-6 text-yellow-400" />
              <StarIcon className="w-6 text-yellow-400" />
            
            </>
          )} {ratings === "one" && (
            <>
              <StarIcon className="w-6 text-yellow-400" />
            </>
          )}

        </div>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Review;
