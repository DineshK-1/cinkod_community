"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
	const targetDate = "2024-05-12T00:00:00";

	const calculateTimeRemaining = () => {
		const now = new Date();
		const target = new Date(targetDate);
		const difference = target - now;

		if (difference <= 0) {
			return {
				total: 0,
				days: 0,
				hours: 0,
				minutes: 0,
				seconds: 0,
			};
		}

		return {
			total: difference,
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	};

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (timeRemaining.total <= 0) {
			// Do something when the countdown reaches zero
		}
	}, [timeRemaining]);

	return (
		<div>
			<div className="flex flex-col justify-center h-[15rem] w-2/3  md:w-full sm:w-full ">
				<div className="text-4xl  text-white mb-4 mt-28">
					{" "}
					We&apos;re <span className="text-the-yellow">Launching </span>Soon!
				</div>

				<div className="counting flex justify-evenly items-center gap-8 text-white ">
					<div className="flex flex-col justify-center ">
						<div className="text-3xl font-medium">{timeRemaining.days}</div>
						<div className="text-base">Days</div>
					</div>

					<div className="flex flex-col justify-center">
						<div className="text-3xl font-medium">{timeRemaining.hours}</div>
						<div className="text-base">Hours</div>
					</div>

					<div className="flex flex-col justify-center">
						<div className="text-3xl font-medium">{timeRemaining.minutes}</div>
						<div className="text-base">Mins</div>
					</div>

					<div className="flex flex-col justify-center ">
						<div className="text-3xl font-medium">{timeRemaining.seconds}</div>
						<div className="text-base">Secs</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
