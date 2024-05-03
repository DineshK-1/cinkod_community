import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const prisma = new PrismaClient();

		const colleges = await prisma.college.findMany();
		return NextResponse.json(colleges, { status: 200 });
	} catch (err) {
		return NextResponse.json(
			{ error: "Error Fetching Colleges" },
			{ status: 500 }
		);
	}
}
