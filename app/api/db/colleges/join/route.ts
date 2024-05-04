import { getUserUID } from "@/firebase/firebaseAdmin";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request){
    try{
        const body = (await request.json()) as {
            accessToken: string;
            collegeId: string;
        };

        const uid = await getUserUID(body.accessToken);

        if(!uid){
            return new NextResponse(
                JSON.stringify({
                    error: "User not found!",
                }),
                { status: 404 }
            );
        }

        const prisma = new PrismaClient();

        const user = await prisma.user.findFirst({
            where: {
                google_uid: uid,
            },
        });

        if(!user){
            return new NextResponse(
                JSON.stringify({
                    error: "User not found!",
                }),
                { status: 404 }
            );
        }

        const college = await prisma.college.findFirst({
            where: {
                id: parseInt(body.collegeId),
            },
        });

        if(!college){
            return new NextResponse(
                JSON.stringify({
                    error: "College not found!",
                }),
                { status: 404 }
            );
        }


    }
}