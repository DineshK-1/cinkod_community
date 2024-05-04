import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { eventId: string } }
) {
    try {
        const prisma = new PrismaClient();

        const event = await prisma.event.findUnique({
            where: {
                id: parseInt(params.eventId),
            },
            include: {
                college: true,
            },
        });

        console.log(event);
        if (event === null) {
            return NextResponse.json(
                { error: "Event Not Found" },
                { status: 404 }
            );
        }
        return NextResponse.json(event, { status: 200 });
    } catch (err) {
        // console.log(err);
        return NextResponse.json(
            { error: "Error Fetching Event" },
            { status: 500 }
        );
    }
}
