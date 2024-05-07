import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET(request: Request) {
    try {
        const prisma = new PrismaClient();
        const colleges = await prisma.college.findMany();
        return NextResponse.json(colleges, { status: 200 });
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { error: "Error fetching colleges", e: e },
            { status: 500 }
        );
    }
}
