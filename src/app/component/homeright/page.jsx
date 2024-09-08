import Link from "next/link";

const HomeRight = async () => {
  try {
    const res = await fetch(`/api/news/getnews`, {
      cache: "no-cache",
    });
    const projects = await res.json();
    return (
      <div className="flex flex-col w-full p-6 bg-white rounded-xl shadow-lg border border-gray-200 space-y-6">
        <p className="text-xl font-semibold mb-6">
          👋 What&apos;s happening this week? 🌟
        </p>

        {projects.map((item) => (
          <div
            key={item._id}
            className="border-b border-gray-300 pb-4 last:border-b-0"
          >
            <p className="text-xs text-gray-500">
              📅 Posted on: {new Date(item.createdAt).toLocaleDateString()}
            </p>
            <Link
              className="block mt-2 text-blue-600 font-bold text-lg hover:underline"
              href={`/component/homeright/${item._id}`}
            >
              📰 {item.title}
            </Link>
          </div>
        ))}

        <p className="text-sm text-gray-500 mt-6">
          Have a great week ahead! 💪🌈
        </p>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center py-6">
        <p className="text-red-600 text-lg font-semibold">
          😕 Oops! Something went wrong.
        </p>
        <p className="text-gray-500">Please try again later.</p>
      </div>
    );
  }
};

export default HomeRight;
