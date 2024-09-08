import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import News from "@/model/news";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectDB();
    let post = await Blog.findById(id).exec();

    if (!post) {
      post = await News.findById(id).exec();
    }

    if (!post) {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
