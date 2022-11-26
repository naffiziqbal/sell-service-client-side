import { useQuery } from "@tanstack/react-query";
import userEvent from "@testing-library/user-event";
import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../../UserContext/UserContext";
import Review from "./Review";

const Reviews = () => {
  const [ratings, setRatings] = useState("");
  const { user } = useContext(AuthContext);

  const rating = (e) => {
    const ratingData = e.target.value;
    setRatings(ratingData);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const message = form.review.value;
    const reviewName = user?.displayName;
    const reviewerImg = user?.photoURL;

    const review = {
      message,
      reviewName,
      reviewerImg,
      ratings,
    };
    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Review has been Successfully Saved, Thank You",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () =>
      fetch("http://localhost:5000/review").then((res) => res.json()),
  });
  return (
    <div className="shadow-primary shadow-xl py-5 my-14 rounded ">
      <h3 className="text-3xl font-semibold text-center my-8">
        What's Our Client Saying
      </h3>
      <div className="overflow-y-hidden">
        <div className="flex gap-3 w-[1600px]">
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <p className="text-xl">Add Your Review</p>
        <form className="form-control" onSubmit={handleFormSubmit}>
          <label className="label">
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                value={"one"}
                className="mask mask-star-2 bg-orange-400"
                onChange={rating}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                checked
                onChange={rating}
                value={"two"}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={rating}
                value={"three"}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={rating}
                value={"four"}
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                onChange={rating}
                value={"five"}
              />
            </div>
          </label>
          <label className="input-group max-w-md">
            <span>{user.email}</span>
            <input
              type="text"
              name="review"
              required
              placeholder="Awesome"
              className="input input-bordered"
            />
            <input type="submit" className="btn btn-primary" />
          </label>
        </form>
      </div>
    </div>
  );
};

export default Reviews;
