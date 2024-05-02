import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
	const cards = Array.from({ length: 9 }).map((_, index) => ({
		id: index + 1,
		title: `Title ${index + 1}`,
		title2: `Writers' Name`,
		description:
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum maxime veniam quas repellat nihil impedit dignissimos nemo architecto at est. Nam eum quod cumque deserunt necessitatibus asperiores adipisci temporibus minima ea quae, corrupti ullam impedit dignissimos pariatur natus, blanditiis odio laudantium omnis quo voluptas. Sequi voluptate asperiores quia sapiente consequuntur?",
		category: index % 2 === 0 ? "Category A" : "Category B",
		tags: ["Tag A", "Tag B"],
	}));

	return (
		<section className="blogs bg-background">
			<Header />
			<div className="text-white text-center mt-20 font-bold text-4xl ">
				<h1>Welcome to</h1>
				<h1 className="text-Blue">
					CINKOD <span className="text-Yellow">DEVELOPER</span> COMMUNITY
				</h1>
			</div>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Search..."
					className="w-2/5 px-4 py-2 mt-3 mb-7 border rounded-md outline-none focus:border-blue-500 border-zinc-700 bg-transparent transition-all"
				/>
			</div>

			<div className="flex justify-center mb-12 rounded-lg ">
				<div className="w-full md:w-4/5 lg:w-3/4 mb-12 bg-gradient-to-br from-Blue/20 to-transparent rounded-lg py-10 px-10">
					<div className="flex justify-between mt-2">
						<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
							Back
						</button>
						<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
							Next
						</button>
					</div>
					<div className="flex  text-white justify-center  mb-4">
						{/* */}
						<select className="mr-4 px-4 py-2 bg-gray-800 border border-gray-800 rounded-md">
							<option value="option1">Categories</option>
						</select>
						{/* */}
						<select className="px-4 py-2 bg-gray-800 border border-gray-800 rounded-md">
							<option value="option1">Tags</option>
						</select>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
						{/* Render only three cards */}
						{cards
							.filter((_, index) => index < 3)
							.map((card, index) => (
								<div
									key={card.id}
									className={`relative bg-slate-900 rounded-lg shadow-lg overflow-hidden col-span-3  border-2 ${
										index === 0 ? "md:col-span-3" : ""
									}`}
								>
									<div className="flex">
										<Image
											src={``}
											alt={`Image${card.id}`}
											className="w-1/3 h-auto object-cover rounded-t-lg"
											width={100}
											height={100}
										/>
										<div className="w-2/3 p-4">
											<h2 className="text-lg text-white font-semibold mb-2">
												{card.title}
											</h2>
											<h2 className="text-lg text-white font-semibold mb-2">
												{card.title2}
											</h2>
											<p className="text-white mb-24">{card.description}</p>
											<div className="flex flex-row gap-3 w-64">
												<button className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded">
													<Link href="/blogs/blogId">UpVote!</Link>
												</button>
												<button className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded">
													<Link href="/blogs/blogId">Comment!</Link>
												</button>
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>
			</div>

			<br />
			<Footer />
		</section>
	);
};

export default Blog;
