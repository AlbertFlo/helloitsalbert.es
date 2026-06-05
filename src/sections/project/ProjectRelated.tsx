import type { Project } from "@/data/projects"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import ProjectsGrid from "@/components/ProjectsGrid"

type ProjectRelatedProps = {
  project: Project
}

export default function ProjectRelated({ project }: ProjectRelatedProps) {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
  return (

      <section id="related-work" aria-labelledby="related-work-heading" className="md:py-25 py-20 relative overflow-hidden bg-primary-foreground text-primary">
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div ref={headerRef} className="text-center mx-auto max-w-xl mb-16">
            <span className={`pb-6 font-body font-semibold text-secondary transition-opacity duration-300 ${headerVisible ? "animate-fade-in" : "opacity-0"}`}>Work</span>

            <h2 id="related-work-heading" className={`text-4xl md:text-5xl font-bold mt-4 mb-6 transition-opacity duration-300 ${headerVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}`}>
              Related Projects
            </h2>
            <p className={`text-primary ${headerVisible ? "animate-fade-in animation-delay-200" : "opacity-0 transition-opacity duration-300"}`}>
              Related projects that I have worked on.
            </p>
          </div>

          {/* Projects Grid */}
          <ProjectsGrid activeProject={project} />
        </div>
      </section>
  )
}
