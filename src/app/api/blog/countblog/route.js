import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";


export async function GET() {
  await connectDB();
  try {
    const blogs = await Blog.find().countDocuments();
    if (!blogs || blogs.length === 0) {
      return NextResponse.json(
        { message: "Number Of Blogs Not Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error("Error fetching number of blogs:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
