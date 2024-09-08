import connectDB from "@/dbConfig/db";
import Users from "@/model/user";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  await connectDB();
  try {
    const { id } = params;
    await Users.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "User deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 200 }
    );
  }
}
