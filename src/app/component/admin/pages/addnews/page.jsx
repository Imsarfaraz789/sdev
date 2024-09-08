"use client";

import axios from "axios";
import BlogForm from "../blogform/page";

const Blog = () => {
  const submitBlog = (apiUrl, data) => axios.post(apiUrl, data);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
      <BlogForm
        onSubmit={submitBlog}
        apiUrl="http://localhost:3000/api/news/addnews"
      />
    </div>
  );
};

export default Blog;
