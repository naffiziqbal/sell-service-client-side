import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <div>
      <h3 className="font-semibold text-4xl underline my-5 hover:text-blue-700 duration-300">
        <Link to ='/addblog'>Add Your Blog Now</Link>
      </h3>
      <hr />
    </div>
  );
};

export default Blog;
