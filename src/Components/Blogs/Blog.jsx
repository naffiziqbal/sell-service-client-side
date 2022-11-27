import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/useTitle";
import BlogContent from "./BlogContent";

const Blog = () => {
  useTitle('Blog')
  const { data: blogs = [], refetch } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      fetch(`https://second-sell.vercel.app/blog`).then((res) => res.json()),

    // .then(data => )
  });
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
