export type Skill = {
    id: number;
    areaTitle: string;
    contentTitle: string;
    contentDescription: string;
    contentImage?: string;
    tools: string[];
};

export const skills: Skill[] = [
    {
        id: 1,
        areaTitle: "Frontend & UI",
        contentTitle: "Pixel-Perfect Implementation",
        contentDescription:
            "HTML5, CSS3, Sass, React, TypeScript, and Tailwind — translating Figma, PSD, and XD mockups into production-ready interfaces with a sharp eye for detail. I work comfortably across component-driven architectures and design-system implementations, ensuring every element is consistent, maintainable, and true to the original design intent.",
        tools: ["HTML5", "CSS3", "Sass", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Tailwind CSS", "Bootstrap"],
    },
    {
        id: 2,
        areaTitle: "Performance & SEO",
        contentTitle: "Speed Is a Feature",
        contentDescription:
            "Core Web Vitals, asset optimization, code splitting, and SEO-friendly rendering strategies baked into every build — not bolted on at the end. From Lighthouse audits to Schema Markup validation, I treat performance as a first-class deliverable that directly impacts user experience, search rankings, and business outcomes.",
        tools: ["Core Web Vitals", "Lighthouse", "Code Splitting", "SSR", "SSG", "Schema Markup", "SEMrush", "Search Console"],
    },
    {
        id: 3,
        areaTitle: "Accessibility & QA",
        contentTitle: "Built for Everyone",
        contentDescription:
            "WCAG 2.1/2.2, WAI-ARIA, cross-browser compatibility, and Cypress E2E testing — quality that holds up in the real world. I integrate automated testing into CI pipelines and conduct manual accessibility audits to ensure every interface is inclusive, robust, and production-ready before it ever reaches a user.",
        tools: ["WCAG 2.1/2.2", "WAI-ARIA", "Cypress", "Cross-browser Testing"],
    },
    {
        id: 4,
        areaTitle: "CMS & Tooling",
        contentTitle: "WordPress at Scale",
        contentDescription:
            "Custom themes, plugins, ACF field groups, and component libraries built for long-term maintainability — deployed across multi-site networks of up to 40 properties. Paired with a solid Git workflow, CI/CD pipelines, Figma handoff, and analytics tooling (GA4, Search Console, SEMrush) to cover the full delivery lifecycle.",
        tools: ["WordPress", "PHP", "ACF", "MySQL", "REST APIs", "Git", "CI/CD", "Figma", "GA4", "Cursor", "Scrum", "Kanban"],
    },
];