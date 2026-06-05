import type { Project } from "@/data/projects"
import ProjectDetails from "./ProjectDetails"
import ProjectSidebar from "./ProjectSidebar"

type ProjectContentProps = {
  project: Project
}

export default function ProjectContent({ project }: ProjectContentProps) {
  return (
    <>
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-6 grid gap-6 lg:grid-cols-[300px_1fr]">
          <ProjectSidebar project={project} />
          <ProjectDetails project={project} />
        </div>
      </section>

    </>
  )
}
