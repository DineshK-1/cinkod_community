import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Mad from "@/public/ChaptersCollege/madhav.png";
import College from "@/public/ChaptersCollege/college.png";
import Card from "@/components/chapters-college/card";
import Image from "next/image";

function CollegePage() {
	return (
		<>
			<div className="overflow-x-hidden relative px-28 bg-[#121212] h-full">
				<Header />

				<div className=" relative flex justify-center items-center h-full ">
					<div
						className="absolute w-80 h-80 rounded-full"
						style={{
							background:
								"linear-gradient(to bottom right, var(--color1), var(--color2), var(--color3))",
							filter: "blur(7.66rem)",
							zIndex: "-1",
						}}
					></div>

					<section className="flex flex-col justify-center items-center mt-24  h-full w-full ">
						<div className=" img-parent h-[4.66rem] w-full flex  justify-center items-center ">
							<div className="img  ">
								{" "}
								<Image className="" src={Mad} alt="" />
							</div>
						</div>

						<div className=" h-68 w-full flex justify-center items-center">
							<Image className=" h-68 w-full " src={College} alt="" />
						</div>

						<div className="text-white w-full flex mt-2 justify-start ">
							<p className="text-left font-medium text-3xl">
								Madhav University of Computer Science
							</p>
						</div>

						<div className="about flex flex-col items-center h-full mb-24 w-full">
							<h1 className="text-white hover:text-slate-400 font-extralight text-3xl text-left mt-28 w-full">
								About Us
							</h1>

							<p className="text-white leading-8 text-lg ml-8 mt-8  ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
								quibusdam laudantium dolor soluta quod, quaerat ratione dicta.
								Porro corporis illum aliquid quaerat tempore! Dicta suscipit
								assumenda expedita. Mollitia quas quisquam pariatur enim
								corrupti? Laudantium, optio! Sit eum eveniet saepe commodi
								fugiat delectus magni iste ipsum aliquid culpa? Magnam, facilis
								non sint neque alias facere sapiente sed accusantium illum odio
								consectetur in nobis, reprehenderit repudiandae deleniti ducimus
								vero, doloribus veritatis?Lorem ipsum dolor sit, amet
								consectetur adipisicing elit. Ratione animi corrupti neque
								debitis inventore veritatis ipsa repellendus esse voluptatibus
								ducimus ab quibusdam quidem, officiis minima harum laboriosam
								amet voluptates. Sunt dolores labore pariatur beatae.
							</p>

							{/* jj */}
						</div>
					</section>

					{/* ******** NEXT SECTION****** */}
				</div>

				<section className="  flex flex-col items-center justify-start  h-full mb-20 w-full">
					<div className="heading text-3xl font-medium  ml-4 w-full flex justify-start items-center">
						<h1 className="text-the-blue hover:text-[#4f658d] ">
							Upcoming Events
						</h1>
					</div>

					<div className="card flex lg:flex-row lg:justify-between px-5 lg:items-center h-1/3 flex-wrap flex-col justify-center items-center w-[70%] mt-16 bg-gradient-to-br from-the-blue/40 to-transparent border-white border rounded-2xl ">
						<div className="image w-44  shadow-slate-900 shadow-md h-44 my-4 bg-slate-600">
							<Image src="" alt="" />
						</div>

						<div className="content  w-[65%] flex-col items-start justify-center">
							<div className="heading text-white text-2xl">
								<h1>Event Name</h1>
							</div>

							<div className="text-white mt-4  sm:ml-2 ">
								{" "}
								<p className="font-thin">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
									dolorem nulla. Doloremque laudantium harum ipsa voluptatem
									commodi. Incidunt repellendus, voluptatibus quasi voluptate
									provident veritatis.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* *********** NEXT SECTION ************ */}

				<section className="flex flex-col items-center mb-36 gap-8 h-full py-4">
					<div className="Heading text-center text-the-blue text-3xl">
						<h1>Organiser</h1>
					</div>

					<div className="flex flex-wrap gap-16 w-full justify-center">
						<div className="card h-[18rem] border w-52 rounded-lg flex flex-col bg-gradient-to-b from-cyan-400/60 to-blue-950/30   justify-between items-center ">
							<div className="img h-36 mt-2 w-36 shadow-slate-900 shadow-md bg-slate-600 rounded-full"></div>

							<div className="Name text-white hover:text-slate-300 flex flex-col items-center mb-6">
								<h3>Name</h3>
								<h3>Designation</h3>
							</div>
						</div>

						<div className="card h-[18rem] border w-52 rounded-lg flex flex-col bg-gradient-to-b from-cyan-400/60 to-blue-950/30   lg:mt-36 justify-between items-center ">
							<div className="img h-36 mt-2 w-36  shadow-slate-900 shadow-md bg-slate-600 rounded-full"></div>

							<div className="Name text-white hover:text-slate-300 flex flex-col items-center mb-6">
								<h3>Name</h3>
								<h3>Designation</h3>
							</div>
						</div>

						<div className="card h-[18rem] border w-52 rounded-lg flex flex-col bg-gradient-to-b from-cyan-400/60 to-blue-950/30  justify-between items-center ">
							<div className="img h-36 mt-2 w-36  shadow-slate-900 shadow-md bg-slate-600 rounded-full"></div>

							<div className="Name text-white hover:text-slate-300 flex flex-col items-center mb-6">
								<h3>Name</h3>
								<h3>Designation</h3>
							</div>
						</div>
					</div>
				</section>

				{/* ********* NEXT SECTION ********* */}

				<section className="flex flex-col mb-44 w-full  justify-center py-4">
					<h1 className="block   text-3xl hover:text-yellow-400 text-the-yellow mb-16 ml-3">
						Previous Events
					</h1>

					<div className="flex w-full  justify-evenly items-center">
						<Card />
						<Card />
						<Card />
						<Card />
					</div>
				</section>

				{/* ********* NEXT SECTION ********* */}

				<Footer />
			</div>
		</>
	);
}

export default CollegePage;
