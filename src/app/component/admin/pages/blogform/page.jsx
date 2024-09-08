"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic for client-side loading
import "react-quill/dist/quill.snow.css";
import CloudinaryUpload from "@/app/component/cloudinarywidget/page";
import Image from "next/image";

// Dynamically load ReactQuill to avoid SSR
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const BlogForm = ({ onSubmit, apiUrl }) => {
  const [formData, setFormData] = useState({
    title: "",
    summary: "",
    content: "",
    author: "",
    image: "",
  });

  const handleImageUpload = (url) => {
    setFormData((prevData) => ({ ...prevData, image: url }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleContentChange = (value) => {
    setFormData((prevData) => ({ ...prevData, content: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onSubmit(apiUrl, formData);
      setFormData({
        title: "",
        summary: "",
        content: "",
        author: "",
        image: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Title Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      {/* Summary Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Summary
        </label>
        <textarea
          name="summary"
          value={formData.summary}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      {/* Content Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Content
        </label>
        <ReactQuill
          value={formData.content}
          onChange={handleContentChange}
          theme="snow"
        />
      </div>
      {/* Author Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Author
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
        />
      </div>
      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium text-gray-700">Image</label>
        <CloudinaryUpload onUploadSuccess={handleImageUpload} />
        {formData.image && (
          <Image
            src={formData.image}
            alt="Blog Image"
            width={100}
            height={100}
            className="mt-2 max-w-xs h-auto rounded"
          />
        )}
      </div>
      {/* Submit Button */}
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};

export default BlogForm;
