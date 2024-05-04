"use client";
import React, { useEffect, useState } from "react";
import College from "@/components/chapters/college";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import axios from "axios";

function Chapter() {
    // State to manage which section is visible
    const [activeRegion, setActiveRegion] = useState("north"); // Default is 'north'

    // Function to handle button clicks
    const handleRegionChange = (region: any) => {
        setActiveRegion(region);
    };

    const [colleges, setColleges] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const colleges = await axios.get("/api/db/colleges/fetch");
            setColleges(colleges.data);
        };
        fetchData();
    }, [setColleges]);
    console.log(colleges);
    // const colleges = await axios.get("/api/db/colleges/fetch");

    return (
        <div>
            <div className="flex flex-col items-center bg-background text-white w-full p-1 h-full">
                <Header />

                <section className="flex flex-col justify-center items-center">
                    <div className="text-white text-center mt-8 font-bold text-4xl">
                        <h1>Welcome to</h1>
                        <h1 className="text-the-blue">
                            CINKOD{" "}
                            <span className="text-the-yellow">DEVELOPER</span>{" "}
                            COMMUNITY
                        </h1>
                    </div>

                    <div className="flex justify-center w-full">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full px-4 py-2 mt-4 border rounded-md outline-none focus:border-blue-500 border-zinc-700 bg-transparent transition-all"
                        />
                    </div>

                    <div className="head text-white text-3xl py-6">
                        <h1>Cinkod Regional List</h1>
                    </div>
                </section>

                <div className="container p-16 w-4/5 mb-28 bg-gradient-to-b from-the-blue/20 rounded-2xl to-transparent">
                    <h2 className="text-3xl font-bold mb-4">
                        Explore by region
                    </h2>
                    {/* Region Tabs */}
                    <div className="flex space-x-4 mb-8">
                        <button
                            onClick={() => handleRegionChange("north")}
                            className={`py-2 px-4 rounded-lg shadow-md ${
                                activeRegion === "north"
                                    ? "bg-gray-600"
                                    : "bg-gray-800"
                            } hover:bg-gray-600`}
                        >
                            North
                        </button>

                        <button
                            onClick={() => handleRegionChange("south")}
                            className={`py-2 px-4 rounded-lg shadow-md ${
                                activeRegion === "south"
                                    ? "bg-gray-600"
                                    : "bg-gray-800"
                            } hover:bg-gray-600`}
                        >
                            South
                        </button>
                    </div>
                    <div className="grid mt-8 grid-cols-1 md:grid-cols-2 gap-6">
                        {colleges.map((college: any) => {
                            return (
                                <College key={college.id} college={college} />
                            );
                        })}
                    </div>
                    {/* Pagination */}
                    <div className="flex justify-between items-center mt-8">
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600">
                            Previous
                        </button>
                        <div>
                            <span className="text-sm">Page</span>
                            <strong>1 of 10</strong>
                        </div>
                        <button className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-600">
                            Next
                        </button>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default Chapter;
