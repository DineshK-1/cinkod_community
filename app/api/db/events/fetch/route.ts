import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function GET() {
    try {
        const prisma = new PrismaClient();

        const events = await prisma.event.findMany({
            include: {
                college: true,
            },
        });
        return NextResponse.json(events, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json(
            { error: "Error Fetching Events" },
            { status: 500 }
        );
    }
}
