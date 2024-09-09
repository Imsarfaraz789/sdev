import React from "react";

const Page = async () => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const [blogRes, newsRes, userRes] = await Promise.all([
    fetch(`${apiBaseUrl}/api/blog/countblog`),
    fetch(`${apiBaseUrl}/api/news/countnews`),
    fetch(`${apiBaseUrl}/api/user/countuser`),
  ]);

  const countBlog = await blogRes.json();
  const countNews = await newsRes.json();
  const countUser = await userRes.json();

  return (
    <div className="flex space-x-6">
      <div className="text-center shadow-lg p-6 bg-white rounded-md">
        <h3 className="text-lg font-semibold">Number Of Blogs</h3>
        <p>{countBlog}</p>
      </div>

      <div className="text-center shadow-lg p-6 bg-white rounded-md">
        <h3 className="text-lg font-semibold">Number Of News</h3>
        <p>{countNews}</p>
      </div>

      <div className="text-center shadow-lg p-6 bg-white rounded-md">
        <h3 className="text-lg font-semibold">Number Of Users</h3>
        <p>{countUser}</p>
      </div>
    </div>
  );
};

export default Page;
