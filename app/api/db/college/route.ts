import { getUserUID } from "@/firebase/firebaseAdmin";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
    try {
        const body = (await request.json()) as {
            collegeId: string;
        };
        const prisma = new PrismaClient();
        const college = await prisma.college.findFirst({
            where: {
                id: parseInt(body.collegeId),
            },
        });
        if (!college) {
            return new NextResponse(
                JSON.stringify({
                    error: "College not found!",
                }),
                { status: 404 }
            );
        }
        return new NextResponse(
            JSON.stringify({
                college,
            }),
            { status: 200 }
        );
    } catch (e) {
        return new NextResponse(
            JSON.stringify({
                error: "Error joining college",
            }),
            { status: 500 }
        );
    }
}
