import Image from "next/image";
import Link from "next/link";

const BlogList = ({ blogs = [] }) => {
  if (!Array.isArray(blogs)) {
    return <p className="text-center py-4 text-red-500">Invalid blog data.</p>;
  }

  if (blogs.length === 0) {
    return <p className="text-center py-4">No blogs available.</p>;
  }

  return (
    <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog._id} className="border rounded-lg p-4 shadow-lg">
          <Image
            src={blog.image}
            alt={blog.title}
            className="h-48 w-full object-cover rounded-md"
            width={200}
            height={100}
          />
          <Link href={`/component/homemiddle/${blog._id}`}>
            <h2 className="mt-4 text-lg font-bold">{blog.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
