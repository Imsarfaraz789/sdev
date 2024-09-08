import Image from "next/image";
import Link from "next/link";

const HomeMiddle = async () => {
  try {
    const res = await fetch(`http://localhost:3000/api/blog/getallblog`, {
      cache: "no-cache",
    });
    const projects = await res.json();

    return (
      <div className="w-full space-y-6">
        {projects.map((post) => (
          <div
            key={post._id}
            className="bg-white border rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl hover:scale-105"
          >
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <Image
                className="w-full h-full object-cover"
                src={post.image}
                alt={post.title}
                fill
                priority
              />
            </div>
            <div className="p-4">
              <Link
                className="hover:underline text-blue-700 font-bold text-lg lg:text-2xl mb-2 block"
                href={`/component/homemiddle/${post._id}`}
              >
                {post.title} 🌟
              </Link>
              <p className="text-sm lg:text-base text-gray-600 mb-2">
                <small>
                  📅 {new Date(post.createdAt).toLocaleDateString()}
                </small>
              </p>
              <p className="text-gray-700 text-sm lg:text-base mb-4">
                {post.excerpt || "Check out this amazing post!"} ✨
              </p>
              <div className="flex gap-6 text-sm">
                <Link
                  className="underline hover:text-blue-500"
                  href={`/component/homemiddle/${post._id}`}
                >
                  🔍 Learn More
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-600 text-xl">🚨 Server Error</p>
        <p className="text-gray-500">Please try again later.</p>
      </div>
    );
  }
};

export default HomeMiddle;
