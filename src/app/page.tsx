"use client";

// import AsciiVideo from "./components/AsciiArtImage";

export default function Home() {
	return (
		// <>
		// 	<AsciiVideo />
		// </>
		// app/sorry/page.tsx or pages/sorry.tsx
		<div className="min-h-screen relative bg-purple-200 overflow-hidden flex items-center justify-center font-sans">
			<title>Sorry kat</title>
			<div className="absolute inset-0 z-0">
				{[...Array(50)].map((_, i) => (
					<div
						key={i}
						className="absolute w-0.5 h-4 bg-blue-500 opacity-60 animate-raindrop"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							animationDelay: `${Math.random() * 2}s`,
							animationDuration: `${1 + Math.random()}s`,
						}}
					/>
				))}
			</div>

			{/* Foreground content */}
			<div className="text-center z-10">
				{/* Boy character */}
				<div className="relative w-40 mx-auto">
					{/* Hair */}
					<div className="absolute top-0 left-[24px] w-28 h-8 bg-gray-800 rounded-t-full z-10" />

					{/* Head */}
					<div className="relative w-28 h-28 bg-amber-100 rounded-full mx-auto z-0 mt-8">
						{/* Eyes */}
						<div className="absolute top-[45px] left-[30px] w-4 h-4 bg-black rounded-full" />
						<div className="absolute top-[45px] right-[30px] w-4 h-4 bg-black rounded-full" />

						{/* Tears */}
						<div className="absolute top-[60px] left-[40px] w-1.5 h-2.5 bg-blue-500 rounded-full animate-cry opacity-70" />
						<div className="absolute top-[60px] right-[40px] w-1.5 h-2.5 bg-blue-500 rounded-full animate-cry opacity-70" />

						{/* Mouth */}
						<div className="absolute bottom-[20px] left-1/2 rotate-180 transform -translate-x-1/2 w-8 h-4 border-b-4 border-red-500 rounded-b-full" />
					</div>

					{/* Body */}
					<div className="w-20 h-24 bg-blue-500 mx-auto rounded-lg -mt-2" />
				</div>

				{/* Sign */}
				<div className="inline-block bg-purple-500 border-2 border-white shadow-2xl shadow-purple-700 rounded-xl px-6 py-2 text-lg font-bold mt-4 animate-ping">
					Kat I&apos;m Sorry
				</div>

				{/* Text */}
				<div className="mt-3 text-xl font-semibold text-pink-700 text-wrap animate-pulse px-8">
					Please forgive me 😢, hindi naman po yun point ko na pag-isipan ka po
					ng hindi maganda ehh😢
				</div>
			</div>

			{/* Custom animations */}
			<style jsx>{`
				@keyframes cry {
					0% {
						transform: translateY(0);
						opacity: 0.7;
					}
					50% {
						transform: translateY(10px);
						opacity: 0.4;
					}
					100% {
						transform: translateY(20px);
						opacity: 0;
					}
				}

				.animate-cry {
					animation: cry 1s infinite;
				}

				@keyframes raindrop {
					0% {
						transform: translateY(-100%);
						opacity: 0.6;
					}
					100% {
						transform: translateY(100vh);
						opacity: 0;
					}
				}

				.animate-raindrop {
					animation-name: raindrop;
					animation-timing-function: linear;
					animation-iteration-count: infinite;
				}
			`}</style>
		</div>
	);
}
