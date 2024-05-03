"use client";

import { createContext, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "@/firebase/firebase";
import { useUser } from "@/store";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [initialLoader, setInitialLoader] = useState<boolean>(false);

    const { user, setUser, logoutUser } = useUser();
    const router = useRouter();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            try {
                if (user) {
                    const token = await user.getIdToken();
                    console.log(user);
                    const { data } = await axios
                        .post(
                            "/api/auth/login",
                            {},
                            {
                                headers: {
                                    Authorization: `Bearer ${token}`,
                                },
                            }
                        )
                        .then((response) => {
                            return response;
                        });
                    if (data.not_registered) {
                        setUser({
                            email: user.email ?? "",
                            name: user.displayName ?? "",
                            avatar_url: user.photoURL ?? "",
                            not_registered: true,
                            accessToken: token,
                        });
                        router.push("/register");
                        return;
                    }
                    Cookies.set("accessToken", data.user.accessToken);
                    toast.success("Logged in successfully.");
                    console.log(user);
                    setUser(data.user);
                } else {
                    Cookies.remove("accessToken");
                    logoutUser();
                    toast.success("Logged out successfully.");
                }
            } catch (error) {
                console.log(error);
            } finally {
                setInitialLoader(false);
            }
        });
        return () => unsubscribe();
    }, [logoutUser, setUser, setInitialLoader]);

    return (
        <AuthContext.Provider value={{}}>
            {initialLoader ? (
                <main className="w-full h-screen">
                    <section className="w-full h-screen flex justify-center animate-pulse items-center">
                        <p className="text-4xl">Cinkod</p>
                    </section>
                </main>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};
