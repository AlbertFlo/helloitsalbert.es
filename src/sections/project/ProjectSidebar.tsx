import { LinkIcon } from "lucide-react"
import type { Project } from "@/data/projects"

type ProjectSidebarProps = {
    project: Project
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
    return (
        <aside className="space-y-5">
            <h2 className="text-secondary uppercase font-heading font-light leading-none md:text-2xl text-xl p-0 pt-2">Project Info</h2>
            <dl className="space-y-4 text-sm">
                <div>
                    <dt className="font-body font-bold text-primary tracking-widest text-sm">Type</dt>
                    <dd className="text-primary text-sm">{project.sidebar.type}</dd>
                </div>
                <div className="mb-2">
                    <dt className="font-body font-bold text-primary tracking-widest text-sm">Role</dt>
                    <dd className="text-primary text-sm">{project.sidebar.role}</dd>
                </div>
                {project.sidebar.company && (
                <div className="mb-2">
                    <dt className="font-body font-bold text-primary tracking-widest text-sm">Company</dt>
                    <dd className="text-primary text-sm">{project.sidebar.company}</dd>
                </div>
                )}
                {project.externalUrl && (
                    <div className="mb-2">
                        <dt className="font-body font-bold text-primary tracking-widest text-sm">Site</dt>
                        <dd>
                            <a
                                href={project.externalUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors text-primary text-sm"
                            >
                                Visit website <LinkIcon className="h-4 w-4" />
                            </a>
                        </dd>
                    </div>
                )}
            </dl>

            <div className="mb-2">
                <ul className="flex flex-wrap gap-2 list-none pl-0">
                    {project.tags.map((tag) => (
                        <li key={tag} className="float-left px-3 py-1 rounded-md bg-surface text-xs font-medium border border-border/50 text-muted-foreground">
                            {tag}
                    </li>
                    ))}
                </ul>
            </div>

        </aside>
    )
}
