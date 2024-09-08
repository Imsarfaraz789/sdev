import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  try {
    const reqBody = await req.json();
    const { image, title, author, content, summary } = reqBody;
    if (!image || !title || !author || !content || !summary) {
      return NextResponse.json(
        { message: "all fileds are required" },
        { status: 400 }
      );
    }

    const newBlog = new Blog({
      image,
      title,
      author,
      content,
      summary
    });

    await newBlog.save();
    return NextResponse.json({ message: "new blog created" }, { status: 200 });
  } catch (error) {
    console.log("something went wrong");
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
