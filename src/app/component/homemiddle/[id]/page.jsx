import Image from "next/image";
import LatestBlog from "../../latest/page";
import BlogList from "../../smallblog/page";
import DOMPurify from "dompurify";

export async function generateMetadata({ params }) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { id } = params;

  try {
    const blogRes = await fetch(`${apiBaseUrl}/api/blog/getallblog/${id}`, {
      cache: "no-cache",
    });

    if (!blogRes.ok) {
      throw new Error("Failed to fetch blog post");
    }

    const project = await blogRes.json();

    return {
      title: `${project.title} | SDEV`,
      description: project.description || "Read more about this blog post.",
    };
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return {
      title: "Error | SDEV",
      description: "Failed to load blog content.",
    };
  }
}

const SingleBlog = async ({ params }) => {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const { id } = params;

  try {
    const blogRes = await fetch(`${apiBaseUrl}/api/blog/getallblog/${id}`, {
      cache: "no-cache",
    });

    if (!blogRes.ok) {
      throw new Error("Failed to fetch blog post");
    }

    const project = await blogRes.json();

    const smallresponse = await fetch(
      `${apiBaseUrl}/api/blog/smallblog/${id}`,
      {
        cache: "no-cache",
      }
    );

    if (!smallresponse.ok) {
      throw new Error("Failed to fetch small blog post");
    }

    const smalblogs = await smallresponse.json();

    const updateDate = new Date(project.updatedAt).toLocaleDateString();

    let cleanContent = "";
    if (DOMPurify && typeof DOMPurify.sanitize === "function") {
      cleanContent = DOMPurify.sanitize(project.content, {
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
    } else {
      console.warn("DOMPurify.sanitize is not available");
      cleanContent = project.content;
    }

    return (
      <div className="max-w-7xl mx-auto py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-64 sm:h-80 lg:h-96">
              <Image
                className="object-cover max-md:px-2 rounded-t-sm"
                src={project.image}
                alt={project.title}
                fill
                loading="lazy"
              />
            </div>
            <div className="p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  className="w-16 h-16 rounded-full object-cover"
                  src="/logo-black.png"
                  width={64}
                  height={64}
                  alt="Author"
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-xl sm:text-2xl text-gray-900">
                    {project.author}
                  </span>
                  <span className="text-gray-500 text-sm">{updateDate}</span>
                </div>
              </div>
              <h1 className="text-3xl max-md:text-2xl sm:text-4xl font-extrabold mb-6 text-gray-800">
                {project.title}
              </h1>
              <div className="prose prose-base sm:prose-lg text-gray-700 mb-6">
                <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 lg:block hidden">
            <LatestBlog />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">More Blogs</h2>
          <BlogList blogs={smalblogs} />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch blog or related data:", error);
    return (
      <p className="text-center py-4 text-red-500">
        Failed to load blog content. Please try again later.
      </p>
    );
  }
};

export default SingleBlog;
