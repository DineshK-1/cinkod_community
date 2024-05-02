import React from "react";
import Example from "../../assets/example.jpg";
import Image from "next/image";

function College(CollegeName, Address) {
	return (
		<div>
			<div class="bg-gray-800 rounded-lg flex gap-10 p-4 shadow-lg">
				<div className="w-[40%]">
					<Image src={Example} alt="" />
				</div>

				<div className="">
					<h3 class="text-xl font-bold">{(CollegeName = "College Name")}</h3>
					<p class="text-gray-400">{(Address = " sample-address")}</p>
					<button class="mt-4 bg-yellow-500 text-black py-2 px-4 rounded-lg hover:bg-yellow-400">
						<a href="/chapter/college">View More</a>
					</button>
				</div>
			</div>
		</div>
	);
}

export default College;
