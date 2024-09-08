import User from "@/model/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import connectDB from "@/dbConfig/db";

export async function POST(req) {
  await connectDB();
  try {
    const reqBody = await req.json();
    const { username, email, password } = reqBody;

    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);
    const hashpassword = await bcrypt.hash(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashpassword,
    });

    await newUser.save();
    return NextResponse.json({ message: "User created" }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during signup:", error);
    return NextResponse.json(
      { message: "User not created", error: error.message },
      { status: 500 }
    );
  }
}
