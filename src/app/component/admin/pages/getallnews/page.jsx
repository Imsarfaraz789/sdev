"use client";

import axios from "axios";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { useState, useEffect } from "react";

const GetAllNews = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/news/getnews");
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/news/deletenews/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };
  return (
    <div className="space-y-4">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="flex justify-between items-center p-4 border rounded-lg shadow-md bg-white"
        >
          <span className="text-lg font-semibold">{blog.title}</span>
          <div className="flex gap-2">
            <Link
              href={`/component/admin/pages/updatenewbyid/${blog._id}`}
              className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              <CiEdit />
            </Link>
            <button
              onClick={() => handleDelete(blog._id)}
              className="p-2 rounded bg-red-500 text-white hover:bg-red-600"
            >
              <MdDeleteOutline />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GetAllNews;
