import { NextResponse } from "next/server";
import Contact from "@/models/Contact";
import { connectDB } from "../../../lib/db.js";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const { name, email, message } = body;

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    return NextResponse.json(
      {
        success: true,
        contact,
      },
      {
        status: 201,
      }
    );
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}