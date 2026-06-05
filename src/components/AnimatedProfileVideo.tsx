import { useEffect, useRef } from "react"

const PAUSE_BETWEEN_LOOPS_MS = 4000
const MAX_LOOPS = 5

export function AnimatedProfileVideo() {
	const videoRef = useRef<HTMLVideoElement>(null)
	const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
	const loopCountRef = useRef(0)

	useEffect(() => {
		return () => {
			if (timerRef.current) clearTimeout(timerRef.current)
			videoRef.current?.pause()
		}
	}, [])

	const handleEnded = () => {
		const video = videoRef.current
		if (!video || loopCountRef.current >= MAX_LOOPS - 1) return
		loopCountRef.current += 1
		timerRef.current = setTimeout(() => {
			timerRef.current = null
			video.play()
		}, PAUSE_BETWEEN_LOOPS_MS)
	}

	return (
		<video
			ref={videoRef}
			src="/heyitsalbert.mp4"
			className="w-full h-full object-cover rounded-lg"
			autoPlay
			muted
			playsInline
			preload="metadata"
			onEnded={handleEnded}
			aria-hidden="true"
			tabIndex={-1}
		/>
	)
}
