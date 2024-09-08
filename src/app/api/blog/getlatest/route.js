import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function GET(req) {
  await connectDB();
  try {
    const latestBlogs = await Blog.find().sort({ createdAt: -1 }).limit(7);

    if (!latestBlogs) {
      return NextResponse.json({ message: "Blog not found" }, { status: 400 });
    }

    return NextResponse.json(latestBlogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
