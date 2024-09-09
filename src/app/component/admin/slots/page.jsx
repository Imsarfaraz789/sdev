import React, { useState, useEffect } from "react";

const Page = () => {
  const [countBlog, setCountBlog] = useState(null);
  const [countNews, setCountNews] = useState(null);
  const [countUser, setCountUser] = useState(null);
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    const fetchBlogCount = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/blog/countblog`);
        const data = await response.json();
        setCountBlog(data);
      } catch (error) {
        console.error("Error fetching blog count:", error);
      }
    };

    const fetchNewsCount = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/news/countnews`);
        const data = await response.json();
        setCountNews(data);
      } catch (error) {
        console.error("Error fetching news count:", error);
      }
    };

    const fetchUserCount = async () => {
      try {
        const response = await fetch(`${apiBaseUrl}/api/user/countuser`);
        const data = await response.json();
        setCountUser(data);
      } catch (error) {
        console.error("Error fetching user count:", error);
      }
    };

    fetchBlogCount();
    fetchNewsCount();
    fetchUserCount();
  }, [apiBaseUrl]);

  return (
    <div className="flex space-x-6">
      <div className="text-center shadow-lg p-6 bg-white rounded-md">
        <h3 className="text-lg font-semibold">Number Of Blogs</h3>
        <p>{countBlog !== null ? countBlog : "Loading..."}</p>
      </div>

      <div className="text-center shadow-lg p-6 bg-white rounded-md">
        <h3 className="text-lg font-semibold">Number Of News</h3>
        <p>{countNews !== null ? countNews : "Loading..."}</p>
      </div>

      <div className="text-center shadow-lg p-6 bg-white rounded-md">
        <h3 className="text-lg font-semibold">Number Of Users</h3>
        <p>{countUser !== null ? countUser : "Loading..."}</p>
      </div>
    </div>
  );
};

export default Page;
