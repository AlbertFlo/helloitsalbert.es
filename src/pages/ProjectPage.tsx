import { Link, useParams } from "react-router-dom"
import ProjectBanner from "@/sections/project/ProjectBanner"
import ProjectContent from "@/sections/project/ProjectContent"
import { getProjectBySlug } from "@/data/projects"
import Navbar from "@/sections/home/Navbar"
import ProjectRelated from "@/sections/project/ProjectRelated"
import Contact from "@/sections/home/Contact"
import { useDocumentTitle } from "@/hooks/useDocumentTitle"

export default function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined
  useDocumentTitle(project?.title)

  if (!project || !project.hasSubpage) {
    return (
      <div className="min-h-screen bg-section-grain">
        <Navbar mode="project" />
        <main className="pt-28 pb-20">
          <section className="container mx-auto px-6">
            <div className="rounded-2xl border border-border/50 bg-background p-8 text-center space-y-4">
              <h1 className="text-3xl font-bold">Project not found</h1>
              <p className="text-muted-foreground">
                The project page you are looking for is not available yet.
              </p>
              <Link to="/" className="inline-block text-primary hover:underline">
                Back to homepage
              </Link>
            </div>
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-section-grain">
      <Navbar mode="project" />
      <main>
        <ProjectBanner project={project} />
        <ProjectContent project={project} />
        <ProjectRelated project={project} />
        <Contact />
      </main>
    </div>
  )
}
