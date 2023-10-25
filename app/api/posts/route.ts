import { NextResponse, NextRequest } from "next/server";
import prisma from "@/prisma/client";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const newPost = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      published: false,
    },
  });

  return NextResponse.json(newPost, { status: 201 });
}
