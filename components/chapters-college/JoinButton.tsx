"use client";
import { useUser } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function JoinButton() {
    const { user } = useUser();

    const router = useRouter();

    const handleJoin = async () => {
        if (!user) return;
        await axios.post("/api/db/colleges/join", {
            accessToken: user.accessToken,
            collegeId: "1",
        });
    };
    return (
        <>
            {user ? (
                <button
                    className="bg-accent text-black font-semibold rounded-full px-4 py-2"
                    onClick={handleJoin}
                >
                    Join College
                </button>
            ) : (
                <button className="bg-accent text-black font-semibold rounded-full px-4 py-2">
                    Login to join college
                </button>
            )}
        </>
    );
}
