"use client";
import Header from "@/components/Header/Header";
import { auth } from "@/firebase/firebase";
import { useUser } from "@/store";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
    const { user } = useUser();
    const router = useRouter();

    if (user?.not_registered) {
        return router.push("/register");
    }

    const handleLogout = () => {
        signOut(auth);
    };

    return (
        <div className="flex flex-col items-center bg-background text-white w-full p-1 h-screen">
            <Header />
            <div className="flex max-w-7xl flex-col w-full gap-3">
                <div className="flex gap-3 justify-between">
                    <h1 className="text-2xl font-medium">
                        Profile Information{" "}
                    </h1>
                    <div className="flex">
                        <button
                            className="bg-red-600 px-6 py-2 rounded-lg"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                </div>
                <h4 className="text-lg">
                    Hello, <span className="text-primary">{user?.name}</span>
                </h4>
            </div>
        </div>
    );
}
