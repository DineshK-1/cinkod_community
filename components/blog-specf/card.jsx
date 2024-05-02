function Card() {
	return (
		<div>
			<div className="card h-[20rem] border w-56 rounded-lg flex flex-col bg-gradient-to-tr from-cyan-600/60 to-blue-950/30   justify-between items-center ">
				<div className="img h-36 mt-2 w-36 shadow-slate-900 shadow-md bg-slate-600 rounded-full"></div>

				<div className="Name text-white flex flex-col items-center text-2xl mb-6">
					<h3>Name</h3>
					<h3>Date</h3>
				</div>
			</div>
		</div>
	);
}

export default Card;
