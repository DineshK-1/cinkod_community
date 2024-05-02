"use client";
import React, { useState } from "react";
import logo from "@/public/Home/logo.png";
import { FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
	const [navbar, setNavbar] = useState(false);
	const Navbar = [
		{
			name: "Home",
			link: "/home",
		},
		{
			name: "About",
			link: "/about",
		},
		{
			name: "Community",
			link: "/events",
		},
		{
			name: "Chapters",
			link: "/chapter",
		},
	];

	return (
		<>
			<nav className="w-full h-auto bg-transparent lg:px-24 md:px-16 sm:px-14 px-4 py-2 ">
				<div className="justify-between ml-4 mx-auto lg:w-full md:items-center md:flex ">
					<div>
						<div className="flex items-center justify-between mr-28 py-2 md:py-5 md:block">
							<Link href="/home" className="flex items-center">
								<Image src={logo} alt="Logo" height={100} width={60} />
							</Link>

							<div className="md:hidden">
								<button
									className="p-2 text-gray-700 rounded-md outline-none border border-transparent focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<FaTimes
											className="text-gray-400 cursor-pointer"
											size={24}
										/>
									) : (
										<FaBars
											className="text-gray-400 cursor-pointer"
											size={24}
										/>
									)}
								</button>
							</div>
						</div>
					</div>

					<div
						className={`${
							navbar ? "flex" : "hidden"
						} md:flex md:items-center md:w-auto w-full`}
					>
						<ul className="list-none lg:flex md:flex sm:block block gap-x-2 gap-y-16">
							{Navbar.map((item, index) => (
								<li key={index}>
									<Link
										href={item.link}
										className="text-white mx-2 text-xl font-medium tracking-wider hover:text-Blue ease-out duration-700"
									>
										{item.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div className="hidden md:block">
						<div className="flex items-center">
							<button className="bg-Yellow text-[1.1rem] font-semibold text-black px-4 py-1.5 hover:bg-yellow-600 ease-out duration-1000 rounded lg:ml-10 md:ml-6">
								Register
							</button>
							<button className="bg-transparent text-[1.1rem] hover:bg-blue text-white ease-out duration-1000 font-normal px-4 py-1.5 rounded border-2 border-Blue lg:ml-10 md:ml-6">
								Sign in
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};

export default Header;
