import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import News from "@/model/news";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    // Try to fetch the blog first
    let post = await Blog.findById(id).exec();

    // If blog is not found, try to fetch news
    if (!post) {
      post = await News.findById(id).exec();
    }

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
