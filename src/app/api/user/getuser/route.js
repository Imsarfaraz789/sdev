import connectDB from "@/dbConfig/db";
import Users from "@/model/user";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const users = await Users.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
