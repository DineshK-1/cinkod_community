"use client";
import { useUser } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

interface formData {
    name: string;
    username: string;
    email: string;
    phone: string;
    college: string;
}

export default function RegisterPage() {
    const { user } = useUser();
    const [formData, setFormData] = useState<formData>({
        name: user?.name ?? "",
        username: "",
        email: user?.email ?? "",
        phone: "",
        college: "",
    });

    const router = useRouter();

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(user);
        await axios
            .post("/api/auth/register", {
                ...formData,
                accessToken: user?.accessToken,
                avatar_url: user?.avatar_url ?? "",
            })
            .then((response) => {
                if (response.status === 200) {
                    toast.success("Registered successfully!");
                    router.push("/");
                }
                console.log(response);
            })
            .catch((error) => {
                if (error.response.status === 409) {
                    toast.error("Username/email already exists!");
                }
            });
    };

    if (!user?.not_registered) router.push("/");

    return (
        <>
            <Toaster />
            <div className="bg-background w-full flex justify-center items-center h-screen">
                <div className="flex flex-col gap-4 bg-zinc-800 p-6 rounded-xl">
                    <h1 className="text-2xl font-semibold text-primary">
                        Cinkod Community Registeration
                    </h1>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}
                    >
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name">Display name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                required
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        name: e.target.value,
                                    })
                                }
                                className="p-2 rounded-xl outline-none bg-transparent border border-zinc-700 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="college"
                                name="college"
                                value={formData.username}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        username: e.target.value,
                                    })
                                }
                                required
                                className="p-2 rounded-xl outline-none bg-transparent border border-zinc-700 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: e.target.value,
                                    })
                                }
                                required
                                className="p-2 rounded-xl outline-none bg-transparent border border-zinc-700 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: e.target.value,
                                    })
                                }
                                required
                                className="p-2 rounded-xl outline-none bg-transparent border border-zinc-700 focus:border-primary transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="college">College</label>
                            <input
                                type="text"
                                id="college"
                                name="college"
                                value={formData.college}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        college: e.target.value,
                                    })
                                }
                                required
                                className="p-2 rounded-xl outline-none bg-transparent border border-zinc-700 focus:border-primary transition-all"
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-primary p-2 rounded-xl text-black font-medium hover:bg-transparent hover:text-white transition-all border border-transparent hover:border-primary"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
