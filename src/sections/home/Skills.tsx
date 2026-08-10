import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { skills } from "@/data/skills";

const COLLAPSED_PX = 80;

export default function Skills() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: tabsRef, isVisible: tabsVisible } = useScrollAnimation(0.05);

    const containerRef = useRef<HTMLDivElement>(null);
    const [activeSkill, setActiveSkill] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const effectiveActiveSkill = isDesktop ? activeSkill : 0;

    useEffect(() => {
        if (!containerRef.current) return;
        const ro = new ResizeObserver(([entry]) => setContainerWidth(entry.contentRect.width));
        ro.observe(containerRef.current);
        return () => ro.disconnect();
    }, []);

    const gridTemplateColumns = isDesktop && containerWidth > 0
        ? skills
            .map((_, i) =>
                i === effectiveActiveSkill
                    ? `${containerWidth - (skills.length - 1) * COLLAPSED_PX}px`
                    : `${COLLAPSED_PX}px`
            )
            .join(" ")
        : undefined;

    return (
        <section id="skills" className="container mx-auto px-6 md:py-25 py-20 relative">
            <div
                ref={headerRef}
                className={`max-w-lg flex flex-col z-10 md:mb-16 mb-10 ${headerVisible ? "animate-fade-in animation-delay-100" : "opacity-0"}`}
            >
                <span className="pb-6 font-body font-semibold text-secondary tracking-widest text-sm">
                    Skills
                </span>
                <h2 className="text-4xl md:text-5xl font-heading text-primary uppercase mb-4 leading-tight">
                    Tools & Technologies I Work With
                </h2>
                <p className="text-primary leading-relaxed">
                    Every tool in my stack earns its place. Performance, accessibility, and
                    scalability aren't afterthoughts. They're built into the process from day one.
                </p>
            </div>

            <div
                ref={tabsRef}
                className={`relative z-10 ${tabsVisible ? "animate-fade-in animation-delay-300" : "opacity-0 transition-opacity duration-300"}`}
            >
                <div
                    id="skillsTabs"
                    ref={containerRef}
                    className="w-full bg-background border border-border rounded-2xl overflow-hidden"
                >
                    <div
                        className="grid grid-cols-1"
                        style={{
                            gridTemplateColumns,
                            transition: isDesktop ? "grid-template-columns 0.5s cubic-bezier(0.4,0,0.2,1)" : undefined,
                        }}
                    >
                        {skills.map((skill, idx) => {
                            const isActive = effectiveActiveSkill === idx;
                            const panelId = `skill-panel-${skill.id}`;
                            const buttonId = `skill-tab-${skill.id}`;
                            return (
                                <div
                                    key={skill.id}
                                    className={`flex flex-col md:flex-row border-b border-border last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 select-none overflow-hidden md:min-h-120 ${isActive ? "bg-white" : ""}`}
                                    style={{ zIndex: idx * 10 }}
                                >
                                    <button
                                        id={buttonId}
                                        type="button"
                                        onClick={() => setActiveSkill(idx)}
                                        aria-expanded={isActive}
                                        aria-controls={panelId}
                                        className="flex flex-row items-center justify-between gap-4 py-4 px-4 md:flex-col md:justify-between md:items-center md:py-8 md:w-[80px] md:self-stretch bg-background flex-shrink-0"
                                    >
                                        <span className="block md:text-2xl text-xl font-heading font-light tabular-nums">
                                            0{skill.id}
                                        </span>
                                        <div className="uppercase font-heading font-light leading-none md:text-2xl text-xl md:whitespace-nowrap md:[writing-mode:vertical-rl] md:transform-[rotate(180deg)]">
                                            {skill.areaTitle}
                                        </div>
                                    </button>

                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        className="grid md:flex-1"
                                        style={{
                                            gridTemplateRows: isActive ? "1fr" : "0fr",
                                            transition: "grid-template-rows 0.5s cubic-bezier(0.4,0,0.2,1)",
                                        }}
                                    >
                                        <div className={`min-h-0 overflow-hidden flex flex-col justify-start max-w-150 px-6 md:px-8 md:py-18 transition-[opacity,transform] duration-500 ease-in-out ${isActive ? "py-6 opacity-100 translate-x-0 pointer-events-auto" : "py-0 opacity-0 -translate-x-5 pointer-events-none"}`}>
                                            <h3 className="text-2xl md:text-4xl font-heading text-secondary uppercase mb-3 leading-tight">
                                                {skill.contentTitle}
                                            </h3>
                                            <p className="text-md leading-relaxed mb-5 text-primary">
                                                {skill.contentDescription}
                                            </p>
                                            <div className="flex flex-wrap gap-2 mb-5">
                                                {skill.tools.map((tool: string) => (
                                                    <span
                                                        key={tool}
                                                        className="px-1.5 py-1 rounded-md bg-surface text-xs font-medium border border-border/50 text-muted-foreground"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                            {skill.contentImage && (
                                                <img
                                                    src={skill.contentImage}
                                                    alt={skill.areaTitle}
                                                    className="w-1/4 rounded-xl object-cover"
                                                    loading="lazy"
                                                />
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}