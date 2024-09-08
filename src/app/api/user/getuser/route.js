import connectDB from "@/dbConfig/db";
import Users from "@/model/user";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDB();
  try {
    const users = await Users.find();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error fetching users:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
