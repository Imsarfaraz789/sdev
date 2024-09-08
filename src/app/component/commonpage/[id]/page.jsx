"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import DOMPurify from "dompurify";
import BlogList from "../../smallblog/page";

const CommonPage = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);
  const [smallBlog, setSmallBlog] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Fetch the main post
        const res = await fetch(`/api/content/${id}`, { cache: "no-cache" });

        if (!res.ok) {
          throw new Error("Failed to fetch post");
        }

        const data = await res.json();
        setPost(data);

        // Fetch related small blogs
        const smallRes = await fetch(`/api/blog/smallblog/${id}`, {
          cache: "no-cache",
        });

        if (!smallRes.ok) {
          throw new Error("Failed to fetch small blogs");
        }

        const smallData = await smallRes.json();
        setSmallBlog(smallData);
      } catch (error) {
        console.error("Failed to fetch blog or related data:", error);
        setError("Failed to load content. Please try again later.");
      }
    };

    fetchPost();
  }, [id]);

  if (error) {
    return <p className="text-center py-4">{error} 😢</p>;
  }

  if (!post) {
    return <p className="text-center py-4">Loading... ⏳</p>;
  }

  const updateDate = new Date(post.updatedAt).toLocaleDateString();

  // Sanitize the content using DOMPurify
  const cleanContent = DOMPurify.sanitize(post.content, {
    ALLOWED_TAGS: [
      "pre",
      "p",
      "ul",
      "ol",
      "blockquote",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
    ],
  });

  return (
    <div className="max-w-7xl mx-auto px-4 max-md:p-2 py-8">
      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        <div className="lg:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            className="w-full h-80 object-cover"
            src={post.image}
            alt={post.title}
            width={1200}
            height={800}
            priority
          />
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <Image
                className="w-16 h-16 rounded-full object-cover"
                src="/logo-black.png"
                width={64}
                height={64}
                alt="Author"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-xl">{post.author} ✍️</span>
                <span className="text-gray-500 text-sm">
                  Updated: {updateDate} 📅
                </span>
              </div>
            </div>
            <h1 className="text-4xl font-extrabold mb-6 max-md:text-3xl text-gray-900">
              {post.title} 🚀
            </h1>
            <div className="text-lg text-gray-700 leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4">{smallBlog && <BlogList blogs={smallBlog} />}</div>
    </div>
  );
};

export default CommonPage;
