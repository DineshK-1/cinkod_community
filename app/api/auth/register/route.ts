import { getUserUID } from "@/firebase/firebaseAdmin";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export async function POST(request: Request) {
    try {
        const body = (await request.json()) as {
            name: string;
            username: string;
            email: string;
            phone: string;
            college: string;
            accessToken: string;
        };
        console.log(body);
        const prisma = new PrismaClient();

        const uid = await getUserUID(body.accessToken);

        if (!uid) {
            return new NextResponse(
                JSON.stringify({
                    error: "User not found!",
                }),
                { status: 404 }
            );
        }

        const user = await prisma.user.create({
            data: {
                name: body.name,
                user_name: body.username,
                email: body.email,
                phone: body.phone,
                college_name: body.college,
                avatar_url: "",
                google_uid: uid,
                bio: "",
            },
        });

        return new NextResponse(
            JSON.stringify({
                message: "User Registered Successfully!",
                user: {
                    accessToken: body.accessToken,
                    email: user.email,
                    name: user.name,
                    username: user.user_name,
                    phone: user.phone,
                    college: user.college_name,
                    avatar_url: user.avatar_url,
                    bio: user.bio,
                    not_registered: false,
                },
            }),
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return new NextResponse(
                JSON.stringify({
                    error: "Username already exists!",
                }),
                { status: 409 }
            );
        }
        return new NextResponse(
            JSON.stringify({
                error: "Failed Registering User!",
            }),
            { status: 500 }
        );
    }
}
