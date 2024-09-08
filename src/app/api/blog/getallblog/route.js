import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 });
    if (!blogs || blogs.length === 0) {
      return NextResponse.json({ message: "Blogs not found" }, { status: 404 });
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
