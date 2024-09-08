"use client";

import BlogForm from "../blogform/page";

const Blog = () => {
  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add New Blog</h1>
      <BlogForm apiUrl="/api/news/addnews" />
    </div>
  );
};

export default Blog;
