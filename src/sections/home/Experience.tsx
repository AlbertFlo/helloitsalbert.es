import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import { experiences, type Experience } from "@/data/experience";

export default function Experience() {
	const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()
    const { ref: timelineRef, isVisible: timelineVisible } = useScrollAnimation(0.05)

    return (
        <section id="experience" className="md:py-25 py-20 relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2" />

                    <div className="md:flex md:items-start">

                        {/* Left col: sticky on desktop, normal flow on mobile */}
                        <div ref={headerRef} className={`md:w-1/2 shrink-0 md:sticky md:top-20 md:self-start flex flex-col pb-6 md:pr-16 pl-6 md:pl-0 ${headerVisible ? "animate-fade-in" : "opacity-0 transition-opacity duration-300"}`}>
                            <span className="pb-6 font-body font-semibold text-secondary">Experience</span>
                            <h2>Where I've Worked</h2>
                            <p className="text-md">Eight years across agencies in Barcelona and Toronto, building frontends for brands ranging from local startups to international franchise networks and globally recognised institutions.</p>
                        </div>

                        {/* Right col — scrolling experience items */}
                        <div ref={timelineRef} className="md:w-1/2 md:space-y-12 space-y-6">
                            {experiences.map((exp: Experience, idx: number) => (
                                <div
                                    key={exp.company}
                                    className={`relative ${timelineVisible ? "animate-fade-in" : "opacity-0 transition-opacity duration-300"}`}
                                    style={timelineVisible ? { animationDelay: `${(idx + 1) * 150}ms` } : undefined}
                                >
                                    {/* Timeline dot */}
                                    <div
                                        className="absolute top-8 w-3 h-3 bg-primary rounded-full ring-4 ring-card z-10"
                                        style={{ left: 0, transform: "translateX(calc(-50% - 0px))" }}
                                    >
                                        {exp.current && (
                                            <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                        )}
                                    </div>

                                    {/* Card */}
                                    <div className="pl-6 md:pl-16">
                                        <div className="animated-border-wrapper bg-background p-6 rounded-2xl  transition-all duration-500">
                                            <span className="text-sm text-primary font-medium">{exp.period}</span>
                                            <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                            <p className="text-primary">{exp.company}</p>
                                            <p className="text-sm text-primary mt-4">{exp.description}</p>
                                            <div className="flex flex-wrap gap-2 mt-4">
                                                {exp.technologies.map((tech: string, techIdx: number) => (
                                                    <span
                                                        key={techIdx}
                                                        className="px-4 py-1.5 rounded-md bg-surface text-xs font-medium border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}