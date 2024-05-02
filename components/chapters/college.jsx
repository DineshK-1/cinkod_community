import Example from "@/public/example.jpg";
import Image from "next/image";
import Link from "next/link";

function College(CollegeName, Address) {
	return (
		<div>
			<div className="bg-gray-800 rounded-lg flex gap-10 p-4 shadow-lg">
				<div className="w-[40%]">
					<Image src={Example} alt="" />
				</div>

				<div className="">
					<h3 className="text-xl font-bold">
						{(CollegeName = "College Name")}
					</h3>
					<p className="text-gray-400">{(Address = " sample-address")}</p>
					<button className="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400">
						<Link href="/chapters/college">View More</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default College;
