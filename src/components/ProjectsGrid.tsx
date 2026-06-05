import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { ArrowUpRight, Github, ChevronRight } from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { Link } from "react-router-dom";
import ProjectCardImage from "@/components/ProjectCardImage";

type ProjectsGridProps = {
    activeProject?: Project
}

export default function ProjectsGrid({ activeProject }: ProjectsGridProps) {

    const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.05)
    const projectsToDisplay: Project[] = activeProject
    ? projects.filter(p => p.slug !== activeProject.slug)
    : projects;
    
    const gridColsClass = activeProject ? "xl:grid-cols-3" : "xl:grid-cols-4";

    return (
        <div
            ref={gridRef}
            className={`grid ${gridColsClass} lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6`}
        >
            {projectsToDisplay.map((project, idx) => {
                const projectRoute = `/projects/${project.slug}`;

                return (
                    <div
                        key={project.slug}
                        className={`animated-border-wrapper flex flex-col bg-white rounded-2xl overflow-hidden md:row-span-1 ${gridVisible ? "animate-fade-in" : "opacity-0 transition-opacity duration-300"}`}
                        style={gridVisible ? { animationDelay: `${(idx + 1) * 200}ms` } : undefined}
                    >
                        {/* Image */}
                        <ProjectCardImage
                            thumbnail={project.thumbnail}
                            thumbnailVideo={project.thumbnailVideo}
                            alt={project.title}
                        >
                            <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60" />
                            {project.hasSubpage && (
                                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <Link
                                        to={projectRoute}
                                        tabIndex={-1}
                                        className="p-3 rounded-full bg-primary text-primary-foreground transition-all z-20"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Link>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            aria-label={`View project on GitHub`}
                                            className="p-3 rounded-full hover:bg-primary hover:text-primary-foreground transition-all z-20"
                                        >
                                            <Github className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </ProjectCardImage>

                        {/* Content */}
                        <div className="p-6 space-y-4 flex flex-col justify-between flex-1">
                            <div className="flex items-start justify-between">
                                <h3 className="text-primary text-xl font-semibold mb-0">{project.title}</h3>
                            </div>
                            <p className="text-primary text-sm flex-1">
                                {project.summary}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-1.5 py-1 rounded-md bg-surface text-xs font-medium border border-border/50 text-muted-foreground  transition-all duration-300"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {project.hasSubpage && (
                                <Link to={projectRoute} className="text-primary text-sm font-semibold group group-hover:text-primary transition-colors flex direction-row items-center gap-1">
                                    View Project
                                    <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-all" />
                                </Link>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}