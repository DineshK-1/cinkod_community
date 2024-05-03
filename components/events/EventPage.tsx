import { College, Event } from "@/@types";
import Image from "next/image";
import Link from "next/link";

export default function EventPage({ events }: { events: Event[] }) {
	return (
		<>
			<div className="flex justify-center">
				<input
					type="text"
					placeholder="Search..."
					className="w-2/5 px-4 py-2 mt-3 mb-7 border rounded-md outline-none focus:border-blue-500 border-zinc-700 bg-transparent transition-all"
				/>
			</div>
			<h1 className="text-white text-3xl text-center py-2 px-2 font-bold">
				CINKOD COMMUNITY LIST
			</h1>
			<div className="flex justify-center mb-12  rounded-lg ">
				<div className="w-full md:w-4/5 lg:w-3/4 mb-12 bg-gradient-to-br from-Blue/20 to-transparent rounded-lg py-10 px-10">
					<div className="flex justify-between mt-2">
						<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
							Back
						</button>
						<button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
							Next
						</button>
					</div>
					<div className="flex justify-center  text-white font-medium  mb-4">
						{/* First dropdown button */}
						<select className="mr-4 px-4 py-2  bg-gray-800 border border-gray-800 rounded-md">
							<option value="option1">Categories</option>
						</select>
						{/* Second dropdown button */}
						<select className="px-4 py-2  bg-slate-800 border border-gray-800 rounded-md">
							<option value="option1">Tags</option>
						</select>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative  ">
						{events.map((event) => {
							return (
								<div
									key={event.id}
									className="relative bg-slate-900 rounded-lg shadow-lg overflow-hidden"
								>
									<Image
										src={``}
										alt={`Image${event.id}`}
										className="w-full h-48 object-cover rounded-t-lg"
									/>
									<div className="p-4">
										<h2 className="text-lg text-white font-semibold mb-2">
											{event.name}
										</h2>
										<h2 className="text-lg text-Yellow font-normal mb-2">
											College name
										</h2>
										<p className="text-white">{event.description}</p>
										<div className="flex flex-col mt-2">
											<Link
												href={`/events/${event.id}`}
												className="bg-yellow-500 hover:bg-yellow-400 text-slate-800 font-normal py-2 px-4 rounded text-center"
											>
												RSVP
											</Link>
										</div>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
}
