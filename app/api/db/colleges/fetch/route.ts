import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    try {
        const prisma = new PrismaClient();
        const colleges = await prisma.college.findMany();
        return NextResponse.json(colleges, { status: 200 });
    } catch (e) {
        return NextResponse.json(
            { error: "Error fetching colleges" },
            { status: 500 }
        );
    }
}
