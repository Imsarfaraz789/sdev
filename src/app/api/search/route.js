import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import News from "@/model/news";
import { NextResponse } from "next/server";

connectDB();

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  try {
    const blogs = await Blog.find({
      title: { $regex: query, $options: "i" },
    });

    const news = await News.find({
      title: { $regex: query, $options: "i" },
    });

    const results = [...blogs, ...news];

    return NextResponse.json(results);
  } catch (error) {

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
