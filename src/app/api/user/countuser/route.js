import connectDB from "@/dbConfig/db";
import Users from "@/model/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const users = await Users.find().countDocuments();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
