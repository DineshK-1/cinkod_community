import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    try {
        const prisma = new PrismaClient();
        const blogs = await prisma.blog.findMany({
            where: {
                published: true,
            },
        });
        return {
            status: 200,
            body: blogs,
        };
    } catch (e) {
        return NextResponse.json(
            {
                error: "Error fetching events",
            },
            { status: 500 }
        );
    }
}
