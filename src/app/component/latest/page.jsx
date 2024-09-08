import Link from "next/link";

const LatestBlog = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/getlatest`, {
      cache: "no-cache",
    });
    const projects = await res.json();

    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white p-4 rounded shadow-md">
          <h1 className="text-xl font-bold mb-4"> 👋 Latest Blogs</h1>
          <hr className="my-4 border-gray-300" />

          {projects.map((blog) => (
            <div key={blog._id} className="mb-6">
              <Link href={`/component/homemiddle/${blog._id}`}>
                <p className="hover:underline hover:text-blue-500 font-semibold">
                  {blog.title + "⚡️"}
                </p>
              </Link>
              <hr className="my-2 border-gray-300" />
            </div>
          ))}

          <p className="text-xs md:text-sm">Enjoy the latest Blogs! ❤️</p>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <p>Server Error</p>
      </div>
    );
  }
};

export default LatestBlog;
