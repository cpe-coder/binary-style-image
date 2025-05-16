"use client";
import { useEffect, useRef, useState } from "react";

const AsciiVideo = () => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [ascii, setAscii] = useState("");
	const [playing, setPlaying] = useState(false);

	const width = 110;
	const height = 85;

	const asciiChars = "Danica";

	const convertToAscii = (
		ctx: CanvasRenderingContext2D,
		width: number,
		height: number
	) => {
		const imageData = ctx.getImageData(0, 0, width, height).data;
		let asciiFrame = "";

		for (let y = 0; y < height; y++) {
			let row = "";
			for (let x = 0; x < width; x++) {
				const offset = (y * width + x) * 4;
				const r = imageData[offset];
				const g = imageData[offset + 1];
				const b = imageData[offset + 2];
				const brightness = (r + g + b) / 3;
				const charIndex = Math.floor(
					(brightness / 255) * (asciiChars.length - 1)
				);
				row += asciiChars[charIndex];
			}
			asciiFrame += row + "\n";
		}

		return asciiFrame;
	};

	useEffect(() => {
		const video = videoRef.current;
		const canvas = canvasRef.current;
		if (!video || !canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = width;
		canvas.height = height;

		let animationFrameId: number;

		const renderLoop = () => {
			if (video && playing && video.readyState >= 2) {
				ctx.drawImage(video, 0, 0, width, height);
				const asciiFrame = convertToAscii(ctx, width, height);
				setAscii(asciiFrame);
			}
			animationFrameId = requestAnimationFrame(renderLoop);
		};

		animationFrameId = requestAnimationFrame(renderLoop);

		return () => cancelAnimationFrame(animationFrameId);
	}, [playing]);

	const togglePlay = () => {
		const video = videoRef.current;
		if (!video) return;

		if (playing) {
			video.pause();
		} else {
			video.play();
		}

		setPlaying(!playing);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen w-full bg-[#0a0a0a] p-4 px-2">
			<title>Danica</title>
			<h1 className="font-bold text-2xl text-purple-500">Danica</h1>
			<video
				ref={videoRef}
				src="/kat.mp4"
				autoPlay
				loop
				width={0}
				height={0}
				playsInline
			/>
			<canvas ref={canvasRef} className="hidden" />
			<pre className="font-mono text-[5px] leading-[6px] text-purple-500 border-2 rounded-2xl whitespace-pre-wrap text-center">
				{ascii}
			</pre>
			<button
				onClick={togglePlay}
				className="mt-4 px-4 py-2 text-white bg-purple-500 hover:bg-purple-400-700 rounded"
			>
				{playing ? "Pause" : "Play"}
			</button>
		</div>
	);
};

export default AsciiVideo;
