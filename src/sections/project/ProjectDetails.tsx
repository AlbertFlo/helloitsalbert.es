import ReactMarkdown from "react-markdown"
import type { Project } from "@/data/projects"

type ProjectDetailsProps = {
  project: Project
}

const proseClasses =
  "[&_h3]:mt-8"

const markdownComponents = {
  img: ({ src, alt }: { src?: string; alt?: string }) => (
    <span className="my-4 text-primary-foreground block rounded-xl border border-border/50 overflow-hidden bg-border/20">
      <img
        src={src}
        alt={alt ?? ""}
        className="w-full h-auto object-cover block"
      />
    </span>
  ),
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  const details = project.details

  if (!details) {
    return (
      <section className="space-y-8">
        <h2>Project Details</h2>
        <p className="text-primary">
          This project does not have a full case study page yet.
        </p>
      </section>
    )
  }

  return (
    <section className="space-y-8">
      <div className={proseClasses}>
        <h2>Project Details</h2>
        <ReactMarkdown components={markdownComponents}>{details.overview}</ReactMarkdown>
      </div>
    </section>
  )
}
