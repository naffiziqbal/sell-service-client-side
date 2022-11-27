import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import BlogContent from "./BlogContent";

const Blog = () => {
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      fetch(`http://localhost:5000/blog`).then((res) => res.json()),

    // .then(data => )
  });
  console.log(blogs);
  return (
    <div>
      <h3 className="font-semibold text-4xl underline my-5 hover:text-blue-700 duration-300">
        <Link to="/addblog">Add Your Blog Now</Link>
      </h3>
      <hr />
      <div className="my-5">
        <header>
          <p className="text-2xl  bg-blue-500 text-center p-2">Blog</p>
        </header>
        <div>
          {blogs.map((blog) => (
            <BlogContent key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
