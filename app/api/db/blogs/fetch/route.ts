import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(req: Request) {
    try {
        const prisma = new PrismaClient();
        const blogs = await prisma.blog.findMany({
            where: {
                published: false,
            },
        });

        return NextResponse.json(blogs, { status: 200 });
    } catch (e) {
        console.log(e);
        return NextResponse.json(
            {
                error: "Error fetching events",
            },
            { status: 500 }
        );
    }
}
