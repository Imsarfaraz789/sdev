import connectDB from "@/dbConfig/db";
import News from "@/model/news"
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectDB();

  try {
    const { id } = params;
    await News.findByIdAndDelete(id);
    return NextResponse.json(
      { message: " News deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
