import Image from "next/image";
import LatestBlog from "../../latest/page";
import DOMPurify from "dompurify";

export async function generateMetadata({ params }) {
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
  try {
    const id = params.id;
    const res = await fetch(`${apiBaseUrl}/api/news/getnews/${id}`);
    const projects = await res.json();

    return {
      title: `${projects.title}`,
      description: projects.description || "Read more about this news article.",
      keywords: `news, ${projects.title}, ${projects.author}`,
    };
  } catch (error) {
    return {
      title: "Error | SDEV",
      description: "Failed to load news content.",
    };
  }
}

const SingleNews = async ({ params }) => {
  try {
    const id = params.id;
    const res = await fetch(`${apiBaseUrl}/api/news/getnews/${id}`);
    const projects = await res.json();

    const updatedAt = new Date(projects.updatedAt).toLocaleDateString();

    let cleanContent = "";
    if (DOMPurify && typeof DOMPurify.sanitize === "function") {
      cleanContent = DOMPurify.sanitize(projects.content, {
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
      cleanContent = projects.content;
    }

    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 bg-white rounded-xl shadow-lg overflow-hidden">
            <Image
              className="w-full h-80 object-cover"
              src={projects.image}
              alt={projects.title}
              width={1200}
              height={800}
              priority
            />
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Image
                  className="w-14 h-14 rounded-full object-cover"
                  src="/logo-black.png"
                  alt="Author logo"
                  width={64}
                  height={64}
                  priority
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-lg">
                    {projects.author}
                  </span>
                  <span className="text-gray-500 text-sm">{updatedAt}</span>
                </div>
              </div>
              <h1 className="text-4xl font-extrabold mb-6">{projects.title}</h1>
              <div className="prose max-w-full">
                <div dangerouslySetInnerHTML={{ __html: cleanContent }} />
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 hidden lg:block">
            <LatestBlog />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-red-600">
          Failed to load news content. Please try again later.
        </p>
      </div>
    );
  }
};

export default SingleNews;
