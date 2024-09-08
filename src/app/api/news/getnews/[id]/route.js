import connectDB from "@/dbConfig/db";
import News from "@/model/news";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();
  try {
    const { id } = params;
    console.log("Fetching blog with ID:", id);

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const news = await News.findById(id);

    if (!news) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
