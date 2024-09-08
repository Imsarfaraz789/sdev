import connectDB from "@/dbConfig/db";
import News from "@/model/news";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    await connectDB();

    const news = await News.find().sort({ createdAt: -1 });

    if (news.length === 0) {
      return NextResponse.json({ message: "News not found" }, { status: 404 });
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error("Error fetching News:", error);

    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
