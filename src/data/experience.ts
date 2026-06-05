export type Experience = {
    period: string;
    role: string;
    company: string;
    description: string;
    technologies: string[];
    current: boolean;
}

export const experiences: Experience[] = [
    {
      period: "Feb 2023 — Oct 2025",
      role: "Frontend Developer / UX-UI Specialist",
      company: "Visca Web — Barcelona, Spain",
      description:
        "Built custom WordPress themes and React component libraries for large-scale platforms. Introduced Cypress E2E testing into the CI pipeline and integrated AI-assisted workflows to accelerate delivery without compromising code quality.",
      technologies: ["WordPress", "TypeScript", "React", "Cypress", "Tailwind CSS", "SEO", "Accessibility"],
      current: true,
    },
    {
      period: "Feb 2020 — Feb 2023",
      role: "Full Stack WordPress Developer",
      company: "Lime Advertising Inc. — Toronto, Canada",
      description:
        "Led WordPress development for major Canadian franchise brands, deploying master templates across up to 40 client sites. Delivered measurable results: one project saw leads grow by 395% and organic traffic by 505% within a year.",
      technologies: ["WordPress", "ACF", "PHP", "MySQL", "SEO"],
      current: false,
    },
    {
      period: "Aug 2018 — Feb 2020",
      role: "Full Stack WordPress Developer",
      company: "Duplo Digital — Barcelona, Spain",
      description:
        "Developed custom themes, plugins, and taxonomies across WordPress and Laravel for clients including IESE Business School, ASICS, and Familia Torres. Managed full project delivery from scoping through deployment.",
      technologies: ["WordPress", "Laravel", "PHP", "JavaScript", "Figma"],
      current: false,
    },
    {
      period: "Nov 2017 — Jul 2018",
      role: "Front-End Developer",
      company: "Persuadis — Barcelona, Spain",
      description:
        "Built websites and microsites for real estate clients including Century 21 and Cushman & Wakefield. Handled domain and server administration and mentored a junior developer.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress"],
      current: false,
    },
  ];
  