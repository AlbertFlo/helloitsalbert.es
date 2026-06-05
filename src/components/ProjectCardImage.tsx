import type { ReactNode } from "react";

const imgClass = "w-full h-full object-cover";

type ProjectCardImageProps = {
	thumbnail: string;
	thumbnailVideo?: string;
	alt: string;
	children?: ReactNode;
};

/**
 * Project card thumbnail with optional hover video (animated WebP).
 * Static image is always shown; when thumbnailVideo is set, it fades in on hover.
 * Both images use native loading="lazy".
 */
export default function ProjectCardImage({
	thumbnail,
	thumbnailVideo,
	alt,
	children,
}: ProjectCardImageProps) {
	const hasHoverVideo = Boolean(thumbnailVideo);

	return (
		<div className="group relative overflow-hidden aspect-video">
			<img
				src={thumbnail}
				alt={alt}
				loading="lazy"
				className={`${imgClass} ${hasHoverVideo ? "" : "transition-transform duration-700 group-hover:scale-110"}`}
			/>
			{hasHoverVideo && (
				<img
					src={thumbnailVideo}
					alt=""
					loading="lazy"
					aria-hidden
					className={`${imgClass} absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
				/>
			)}
			{children}
		</div>
	);
}
