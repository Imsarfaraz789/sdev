import React from "react";

const Page = async () => {
  // Fetching the counts from APIs
  const [blogRes, newsRes, userRes] = await Promise.all([
    fetch(`http://localhost:3000/api/blog/countblog`),
    fetch(`http://localhost:3000/api/news/countnews`),
    fetch(`http://localhost:3000/api/user/countuser`),
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
