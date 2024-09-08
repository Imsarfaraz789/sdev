"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CloudinaryUpload from "@/app/component/cloudinarywidget/page";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";
import Image from "next/image";

const UpdateNews = ({ params }) => {
  const { id } = params;
  const router = useRouter();

  const [news, setNews] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    image: "",
  });

  useEffect(() => {
    const fetchBlogById = async () => {
      try {
        const response = await axios.get(`/api/news/getnews/${id}`);
        const { title, summary, content, author, image } = response.data;
        setNews({ title, summary, content, author, image });
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchBlogById();
  }, [id]);

  const handleImageUpload = (url) => {
    setBlog((prevBlog) => ({ ...prevBlog, image: url }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({ ...prevBlog, [name]: value }));
  };

  const handleContentChange = (content) => {
    setBlog((prevBlog) => ({ ...prevBlog, content }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/news/updatenews/${id}`, news);
      router.push("/component/admin/slots");
    } catch (error) {
      console.error("Error updating news:", error);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Update News</h1>

      <div className="mb-8 p-6 border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold mb-4">Edit News Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={news.title}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Summary
            </label>
            <textarea
              name="summary"
              value={news.summary}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Content
            </label>
            <ReactQuill
              value={news.content}
              onChange={handleContentChange}
              className="h-40"
              theme="snow"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              name="author"
              value={news.author}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <CloudinaryUpload onUploadSuccess={handleImageUpload} />
            {news.image && (
              <Image
                src={news.image}
                alt="News"
                className="mt-2 max-w-xs h-auto rounded"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateNews;
