"use client"

import axios from "axios";
import Link from "next/link";
import { CiEdit } from "react-icons/ci"; // Import the edit icon
import { MdDeleteOutline } from "react-icons/md"; // Import the delete icon
import { useState, useEffect } from "react"; // Import necessary hooks

const Page = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/blog/getallblog"
        );
        setBlogs(response.data); 
      } catch (error) {
        setError("Server Error");
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/blog/deleteblog/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id)); 
    } catch (error) {
      console.error("Error deleting blog:", error);
    }
  };

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

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
              href={`/component/admin/pages/updateblog/${blog._id}`}
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

export default Page;
