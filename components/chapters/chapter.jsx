import React, { useState } from "react";
import College from "./college";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Chapter() {
	// State to manage which section is visible
	const [activeRegion, setActiveRegion] = useState("north"); // Default is 'north'

	// Function to handle button clicks
	const handleRegionChange = (region) => {
		setActiveRegion(region);
	};

	return (
		<div>
			<div className="bg-gradient-to-b flex flex-col items-center from-black to-[#13131a] text-white w-full p-1 h-full">
				<Header />

				<section className="flex flex-col justify-center items-center">
					<div className="text-white text-center mt-20 font-bold text-4xl ">
						<h1>Welcome to</h1>
						<h1 className="text-the-blue">
							CINKOD <span className="text-the-yellow">DEVELOPER</span>{" "}
							COMMUNITY
						</h1>
					</div>

					<div className="flex justify-center w-full">
						<input
							type="text"
							placeholder="Search..."
							className="w-2/5 px-4 py-2 mt-3 mb-7 border rounded-md outline-none focus:border-blue-500 border-zinc-700 bg-transparent transition-all"
						/>
					</div>

					<div className="head text-white text-3xl mb-6 mt-16">
						<h1>Cinkod Regional List</h1>
					</div>
				</section>

				<div className="container p-16 w-4/5 mb-28 bg-gradient-to-b from-the-blue/20 rounded-2xl to-transparent">
					<h2 className="text-3xl font-bold mb-4">Explore by region</h2>

					{/* Region Tabs */}
					<div className="flex space-x-4 mb-8">
						<button
							onClick={() => handleRegionChange("north")}
							className={`py-2 px-4 rounded-lg shadow-md ${
								activeRegion === "north" ? "bg-gray-600" : "bg-gray-800"
							} hover:bg-gray-600`}
						>
							North
						</button>

						<button
							onClick={() => handleRegionChange("south")}
							className={`py-2 px-4 rounded-lg shadow-md ${
								activeRegion === "south" ? "bg-gray-600" : "bg-gray-800"
							} hover:bg-gray-600`}
						>
							South
						</button>
					</div>

					{/* Conditional rendering of content based on active region */}
					{activeRegion === "north" && (
						<div className="grid mt-8 grid-cols-1 grid-rows-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* Your North section content */}
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							{/* Repeat as needed */}
						</div>
					)}

					{activeRegion === "south" && (
						<div className="grid grid-cols-1 grid-rows-5 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{/* Your South section content */}
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							<College />
							{/* Repeat as needed */}
						</div>
					)}

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
