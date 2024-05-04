import { getUserUID } from "@/firebase/firebaseAdmin";
import { Prisma, PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(
    request: Request,
    { params }: { params: { eventId: string } }
) {
    try {
        const body = (await request.json()) as {
            accessToken: string;
        };
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

        const user = await prisma.user.findFirst({
            where: {
                google_uid: uid,
            },
        });

        if (!user) {
            return new NextResponse(
                JSON.stringify({
                    error: "User not found!",
                }),
                { status: 404 }
            );
        }

        const event = await prisma.event.findFirst({
            where: {
                id: parseInt(params.eventId as string),
            },
        });

        if (!event) {
            return new NextResponse(
                JSON.stringify({
                    error: "Event not found!",
                }),
                { status: 404 }
            );
        }

        const registration = await prisma.eventRegisteration.create({
            data: {
                User: {
                    connect: {
                        id: user.id,
                    },
                },
                Event: {
                    connect: {
                        id: event.id,
                    },
                },
            },
        });

        console.log(registration);

        return new NextResponse(
            JSON.stringify({
                message: "User Registered Successfully!",
                event: event,
            }),
            { status: 200 }
        );
    } catch (error) {
        console.log(error);
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            return new NextResponse(
                JSON.stringify({
                    error: "Already Registered",
                }),
                { status: 409 }
            );
        }
        return new NextResponse(
            JSON.stringify({
                error: "Internal Server Error",
            }),
            { status: 500 }
        );
    }
}
