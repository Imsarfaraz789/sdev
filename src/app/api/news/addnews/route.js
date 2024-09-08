import connectDB from "@/dbConfig/db";
import News from "@/model/news";
import { NextResponse } from "next/server";

export async function POST(req) {
  await connectDB();
  try {
    const reqBody = await req.json();
    const { title, content, author, image, summary } = reqBody;

    if (!title || !image || !content || !author || !summary) {
      return NextResponse.json(
        {
          message: "Fields cannot be null",
        },
        { status: 400 }
      );
    }

    const newNews = new News({
      title,
      image,
      content,
      author,
      summary,
    });

    await newNews.save();

    return NextResponse.json(
      { message: "News added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
