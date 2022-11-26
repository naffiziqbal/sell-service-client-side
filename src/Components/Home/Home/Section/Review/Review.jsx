import React from "react";

const Review = ({ review }) => {
  const { reviewName, reviewerImg, message, ratings } = review;
  return (
    // <div className="shadow rounded-xl w-2/4 ">
    //   <div className="flex items-center">
    //     <img src={reviewerImg} className="w-12 h-12 rounded-full mx-5" alt="" />
    //     <span>
    //       {" "}
    //       <strong>{reviewName}</strong>{" "}
    //     </span>
    //   </div>
    //   <span>
    //     <p className="ml-5"> {message}</p>
    //   </span>
    // </div>
    <div className="  card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{reviewName}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Review;
