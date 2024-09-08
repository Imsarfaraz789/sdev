import connectDB from "@/dbConfig/db";
import Users from "@/model/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
    const reqBody = await req.json();
    const { email, password } = reqBody;

    const findUser = await Users.findOne({ email });
    if (!findUser) {
      return NextResponse.json(
        { message: "User not registered" },
        { status: 400 }
      );
    }

    const passwordValid = await bcrypt.compare(password, findUser.password);
    if (!passwordValid) {
      return NextResponse.json(
        { message: "Please enter correct credentials" },
        { status: 400 }
      );
    }

    const tokendata = {
      id: findUser._id,
      username: findUser.username,
      role: findUser.role,
    };
    const token = jwt.sign(tokendata, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });

    const response = NextResponse.json(
      {
        message: "Login successful",
        success: true,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error) {
    console.error("Error occurred during login:", error);
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
