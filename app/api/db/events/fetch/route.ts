import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
	try {
		const prisma = new PrismaClient();

		const events = await prisma.event.findMany();
		return NextResponse.json(events, { status: 200 });
	} catch (err) {
		return NextResponse.json(
			{ error: "Error Fetching Events" },
			{ status: 500 }
		);
	}
}
