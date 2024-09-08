import connectDB from "@/dbConfig/db";
import News from "@/model/news";
import { NextResponse } from "next/server";

export async function POST(req, { params }) {
  await connectDB();
  try {
    const { id } = params;
    const reqBody = await req.json();
    const { title, content, author, summary } = reqBody;

    const news = await News.findById(id);
    if (!news) {
      return NextResponse.json({ message: "News not found" }, { status: 400 });
    }

    news.title = title || news.title;
    news.content = content || news.content;
    news.author = author || news.author;
    news.summary = summary || news.summary;

    await news.save();
    return NextResponse.json(
      {
        message: "news updated successfully",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal Server Erro",
      },
      { status: 500 }
    );
  }
}
