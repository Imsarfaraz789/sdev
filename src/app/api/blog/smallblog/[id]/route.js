import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  try {
    const { id } = params; // Correctly receive the `id` from params

    if (!id) {
      console.error("Blog ID is not provided");
      return NextResponse.json(
        { message: "Blog ID is required" },
        { status: 400 }
      );
    }

    // Exclude the current blog from the list
    const filter = { _id: { $ne: id } };
    console.log("Correct filter value is:", filter);

    // Fetch other blogs
    const blogs = await Blog.find(filter).sort({ createdAt: -1 }).limit(6);

    if (blogs.length === 0) {
      return NextResponse.json({ message: "No blogs found" }, { status: 404 });
    }

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
