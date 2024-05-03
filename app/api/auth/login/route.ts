import { FirebaseAdminAuth } from "@/firebase/firebaseAdmin";
import { verifyHeaderHasToken } from "@/services/auth";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

async function checkIfUserHasAccess(token: string) {
    const { uid } = await FirebaseAdminAuth.verifyIdToken(token, true);

    if (!uid) {
        throw new Error("User not found!");
    }
    const prisma = new PrismaClient();
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
                return undefined;
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
                    // collegeId,
                    // email,
                    // google_uid,
                    // isAdminstrator,
                    // isCoreTeam,
                    // isLead,
                    // isMember,
                    // name,
                    // phone,
                    // user_name,
                },
                message: "Logged In",
            }),
            { status: 200 }
        );
    } catch (error: any) {
        return new NextResponse("You don't have access to this website", {
            status: 401,
        });
    }
}
