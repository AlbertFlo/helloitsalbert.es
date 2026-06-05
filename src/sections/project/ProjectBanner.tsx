import type { Project } from "@/data/projects"

type ProjectBannerProps = {
	project: Project
}

export default function ProjectBanner({ project }: ProjectBannerProps) {
	return (
		<section className="text-primary-foreground mb-10 bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `linear-gradient(to left,rgba(36, 44, 57, 0.90), rgba(36, 44, 57, 0.98)), url(${project.bannerImage})` }}>
			<div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="space-y-4">
							<h1 className="text-6xl md:text-6xl lg:text-8xl font-bold leading-none pb-6 animate-fade-in animation-delay-100 text-primary-foreground">
								{project.title}<span className="text-secondary">.</span>
							</h1>
							<p className="text-md text-primary-foreground max-w-lg animate-fade-in animation-delay-200">
								{project.summary}
							</p>
						</div>

					</div>
				</div>
			</div>
		</section>
	)
}
