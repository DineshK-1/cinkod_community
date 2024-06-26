import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";
async function checkIfUserHasAccess(token: string) {
    const { uid } = await FirebaseAdminAuth.verifyIdToken(token, true);

    if (!uid) {
        throw new Error("User not found!");
    }
    const prisma = new PrismaClient();
    console.log(prisma);
    const user = await prisma.user.findFirst({
        where: {
            google_uid: uid,
        },
    });
    console.log(user);
    if (!user) {
        throw new Error("User not found!");
    }

    return user;
}

export async function POST(request: Request) {
    try {
        const token = verifyHeaderHasToken(request);

        const userDetails = await checkIfUserHasAccess(token)
            .then((user) => {
                return user;
            })
            .catch((error) => {
                console.log(error);
                return null;
            });
        if (!userDetails) {
            return new NextResponse(
                JSON.stringify({
                    not_registered: true,
                }),
                { status: 200 }
            );
        }
        return new NextResponse(
            JSON.stringify({
                user: {
                    accessToken: token,
                    email: userDetails.email,
                    name: userDetails.name,
                    username: userDetails.user_name,
                    phone: userDetails.phone,
                    college: userDetails.college_name,
                    avatar_url: userDetails.avatar_url,
                    bio: userDetails.bio,
                    not_registered: false,
                },
                message: "Logged In",
            }),
            { status: 200 }
        );
    } catch (error: any) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({
                error: "Error logging in",
                e: error,
            }),
            {
                status: 401,
            }
        );
    }
}
