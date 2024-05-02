import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CountdownTimer from "@/components/countdown";
import Img1 from "@/public/Home/Img1.png";
import Laptop from "@/public/Home/laptop.png";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="overflow-x-hidden relative bg-[#121212]">
				<Header />

				<div
					className="absolute w-80 h-80 top-[7%] left-[40%] rounded-full"
					style={{
						background:
							"linear-gradient(to bottom right, var(--color1), var(--color2), var(--color3))",
						filter: "blur(7.66rem)",
					}}
				></div>

				<div className=" relative flex justify-center items-center h-screen ">
					{/*  */}

					<div className="container w-4/5 h-1/2 lg:w-2/3">
						<div className="w-full h-full text-white flex flex-col gap-4 items-center justify-start  ">
							<h1 className="block text-5xl mt-4 "> Lorem ipsum </h1>
							<h1 className="block text-5xl ">
								{" "}
								<span className="text-the-yellow">Lorem ipsum</span> dolor sit{" "}
							</h1>

							<p className=" block text-lg text-center mt-6">
								{" "}
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Repudiandae necessitatibus molestias maxime omnis, eveniet velit
								eaque ullam saepe, amet accusamus rem! Illo, accusantium
								numquam?
							</p>

							<h1 className=" text-the-yellow text-lg">
								{" "}
								Have a look at our community
							</h1>
							<button className="bg-transparent border-2 cursor-pointer border-[rgb(1,160,225)] text-[#01A0E1] hover:bg-blue-500 hover:text-[#fff] py-2 px-4  font-bold">
								View Community
							</button>

							<CountdownTimer />
						</div>
					</div>
				</div>

				{/* ********** NEXT PAGE *************** */}

				<div className=" relative flex justify-center items-center h-full lg:h-screen pb-10 mt-[10rem] ">
					<div className="relative w-full h-full">
						<div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#01A0E1] to-[#01A0E1] filter blur-[8rem] top-[25%] left-[20%] lg:left-[30%]"></div>
						<div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 via-teal-500 to-yellow-400 filter blur-[8rem] top-[60%] left-[45%] lg:top-[55%] lg:left-[50%]"></div>
						{/* *********************************************** */}

						<h1 className="text-the-blue text-4xl font-light ml-44 mb-20 mt-20">
							{" "}
							How we help the students{" "}
						</h1>

						{/* ************ CARD FLEXBOX ****************** */}

						<div className="parent flex justify-center items-center h-4/5">
							<div className="flex flex-wrap mx-1 justify-center lg:flex-row sm:flex-col md:flex-row w-2/4 h-full">
								{/* ************ CARDS IN PAGE 2 ****************** */}

								<div className="w-full lg:w-1/2 p-4 md:w-2/3 sm:w-full h-1/2 mb-4 md:mb-0">
									<div className="bg-[#ffffff28] border-2 border-r-blue-300 shadow-sm shadow-blue-400 border-b-blue-400 rounded-lg p-4 h-full">
										<h2 className="text-white text-xl font-bold mb-2">
											Title{" "}
										</h2>
										<p className="text-white">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>

								<div className="w-full lg:w-1/2 md:w-2/3 p-4 sm:w-full h-1/2 mb-4 md:mb-0">
									<div className="bg-[#ffffff28] backdrop-blur-2xl border-2 border-l-blue-300  border-b-blue-400  shadow-sm shadow-teal-500  order-b-blue-400 rounded-lg p-4 h-full transform lg:-translate-y-8">
										<h2 className="text-white text-xl font-bold mb-2">
											Title{" "}
										</h2>
										<p className="text-white">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>

								<div className="w-full lg:w-1/2 p-4 md:w-2/3 sm:w-full h-1/2 mb-4 md:mb-0">
									<div className="bg-[#ffffff28] border-2 border-b-teal-500 border-l-teal-500 shadow-sm shadow-teal-500 rounded-lg p-4 h-full ">
										<h2 className="text-white text-xl font-bold mb-2">
											Title{" "}
										</h2>
										<p className="text-white">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>

								<div className="w-full lg:w-1/2 p-4 md:w-2/3 sm:w-full h-1/2 mb-4 md:mb-0">
									<div className="bg-[#ffffff28] border-2 border-b-teal-500 border-l-teal-500 shadow-sm shadow-teal-500 rounded-lg p-4 h-full transform lg:-translate-y-8">
										<h2 className="text-white text-xl font-bold mb-2">
											Title{" "}
										</h2>
										<p className="text-white">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											Sed do eiusmod tempor incididunt ut labore et dolore magna
											aliqua.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* ******************** NEXT PAGE ******************* */}

				<div className=" relative flex justify-center items-center h-full lg:h-full mb-40 pb-10 ">
					<div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-[#01A0E1] to-[#01A0E1] filter blur-[8rem] top-[25%] left-[20%] lg:left-[30%]"></div>
					<div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-blue-400 via-teal-500 to-yellow-400 filter blur-[8rem] top-[60%] left-[45%] lg:top-[55%] lg:left-[50%]"></div>

					{/* ********  IMAGES *********** */}

					<div className="flex container mx-auto flex-col items-center h-full lg:ml-72 mt-[17rem] mb-28  ">
						<div className="flex h-3/4 mb-16">
							<div className="image h-full">
								<Image src={Img1} alt="Image 1" />
							</div>

							<p className="block text-white text-lg mr-2 ml-8 text-justify mt-16 w-[55%]">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Similique assumenda nesciunt ipsam vel exercitationem nisi
								deserunt maiores quae debitis ea magnam doloremque provident
								enim possimus, laborum cupiditate beatae cumque magni dicta
								voluptatem vero. Fugit?Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Reprehenderit minima, ducimus tempore ex odit
								illo voluptates corrupti facere dolorum harum, incidunt error?
								Ipsa.
							</p>
						</div>

						<div className="flex h-3/4 ">
							<p className="block text-white w-[55%] text-lg mr-8  ml-2 text-justify mt-16">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Similique assumenda nesciunt ipsam vel exercitationem nisi
								deserunt maiores quae debitis ea magnam doloremque provident
								enim possimus, laborum cupiditate beatae cumque magni dicta
								voluptatem vero. Fugit?Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Reprehenderit minima, ducimus tempore ex odit
								illo voluptates corrupti facere dolorum harum, incidunt error?
								Ipsa.
							</p>

							<div className="image h-full">
								<Image src={Laptop} alt="img1" />
							</div>
						</div>
					</div>
				</div>

				{/* ******* FOOTER ******** */}

				<Footer />
			</div>
		</>
	);
}
