import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const token = req.cookies.get("token")?.value || "";
    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized", isAuthenticated: false },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    return NextResponse.json(
      {
        message: "Authenticated Successfully",
        isAuthenticated: true,
        role: decoded.role,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Something went wrong",
        error: error.message,
        isAuthenticated: false,
      },
      { status: 500 }
    );
  }
}
