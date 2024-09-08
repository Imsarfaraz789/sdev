import connectDB from "@/dbConfig/db";
import Blog from "@/model/blog";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const reqBody = await req.json();
    const { title, content, author, summary } = reqBody;

    const blog = await Blog.findById(id);
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 400 });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    blog.author = author || blog.author;
    blog.summary = summary || blog.summary;

    await blog.save();
    return NextResponse.json(
      {
        message: "Blog updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating blog:", error);
    return NextResponse.json(
      {
        message: "Internal Server Erro",
      },
      { status: 500 }
    );
  }
}
