import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Projects() {

	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

	return (
		<section id="work" className="md:py-25 py-20 relative overflow-hidden bg-white/50 z-20">
			<div className="container mx-auto px-6 relative z-10">
				{/* Section Header */}
				<div ref={headerRef} className="text-center mx-auto max-w-xl mb-16">
					<span className={`pb-6 font-body font-semibold text-secondary transition-opacity duration-300 ${headerVisible ? "animate-fade-in" : "opacity-0"}`}>Work</span>

					<h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 transition-opacity duration-300 ${headerVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}`}>
						Projects that shaped my practice
					</h2>
					<p className={headerVisible ? "animate-fade-in animation-delay-200" : "opacity-0 transition-opacity duration-300"}>
						A selection of my recent work, from complex web applications to
						innovative tools that solve real-world problems.
					</p>
				</div>

				{/* Projects Grid */}
				<ProjectsGrid />
			</div>
		</section>
	)
}