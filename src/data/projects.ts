export type ProjectSidebarData = {
  type: string
  role: string
  company?: string
  siteUrl?: string
}

export type ProjectDetailsData = {
  /** Full project content in Markdown: overview, outcomes/results, images, etc. */
  overview: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  thumbnail: string
  thumbnailVideo?: string
  bannerImage: string
  tags: string[]
  externalUrl?: string
  github?: string | null
  hasSubpage: boolean
  hiddenFromGrid?: boolean
  sidebar: ProjectSidebarData
  details?: ProjectDetailsData
}

export const projects: Project[] = [
  {
    slug: "watch-configurator",
    title: "3D Watch Configurator",
    summary:
      "A self-initiated experiment in real-time 3D on the web: a scroll-driven landing page where a Blender-modelled watch can be customised live (finishes, dial textures and an animated exploded view) rendered with Three.js and React Three Fiber.",
    thumbnail: "/mockup_watch_configurator.webp",
    bannerImage: "/project-watch_configurator_banner.webp",
    tags: ["Three.js", "React Three Fiber", "React", "TypeScript", "Zustand", "Tailwind CSS", "Motion", "Blender", "Vite"],
    externalUrl: "https://watchconfigurator.netlify.app/",
    github: null,
    hasSubpage: true,
    sidebar: {
      type: "Personal Project, Real-Time 3D",
      role: "Design & Development",
      siteUrl: "https://watchconfigurator.netlify.app/",
    },
    details: {
      overview: `
This project started as a personal challenge: learn real-time 3D on the web properly, end to end, without a client brief or a template to lean on. The result is a scroll-driven product landing page built around a watch I modelled and textured myself in Blender.

The watch is fully customisable in the browser: swap case finishes, change dial textures, and trigger an animated exploded view that separates the components in 3D space. Everything runs live in WebGL rather than as pre-rendered frames, so the configuration state and the camera are always in sync with what the user is doing.

The frontend is React and TypeScript with React Three Fiber driving Three.js declaratively. Configuration state lives in Zustand so the 3D scene and the UI controls read from a single source of truth, and Motion handles the interface transitions that sit on top of the canvas. Vite keeps the build and the iteration loop fast, and Tailwind CSS covers the 2D layer.

### What I owned
- 3D modelling, materials, and export pipeline in Blender (glTF, draco-compressed)
- Real-time scene setup: lighting, environment maps, and camera choreography
- Scroll-driven storytelling synced to the 3D camera and model state
- Live configurator logic: finishes, dial textures, and the exploded-view animation
- UI design and implementation, plus state architecture with Zustand
- Performance work: asset budgets, texture compression, and mobile fallbacks
      `.trim(),
    },
  },
  {
    slug: "personal-website",
    title: "Personal Website",
    summary: "Designed and built from scratch, from concept and Figma design system through to a React/TypeScript frontend, with all visuals and assets created in-house.",
    thumbnail: "/mockup_personal_website.webp",
    bannerImage: "/project-personal_website_banner.webp",
    tags: ["React", "Tailwind CSS", "TypeScript", "Vite", "Figma", "Blender", "Affinity", "ComfyUI"],
    externalUrl: "https://helloitsalbert.es/",
    hasSubpage: true,
    sidebar: {
      type: "Personal Website",
      role: "Full Stack Developer",
    },
    details: {
      overview: `
This site is the result of full end-to-end ownership, from the initial concept and Figma design system through to production deployment. Every decision, visual, and line of code is mine.

The design started in Figma, where I defined layout, typography, colour systems, and reusable components before writing any code. The frontend is built with React, TypeScript, and Tailwind CSS, using Vite for fast builds and GSAP for scroll-driven motion and interaction.

To push the visual identity further, I created a custom 3D avatar, modelled and rigged in Blender, then animated through an AI-assisted pipeline using ComfyUI. This allows for a more distinctive and expressive experience than typical stock or static assets. Additional visuals were produced in Affinity Creative Suite.

### What I owned
- Product concept and information architecture
- UI/UX design in Figma (components, design tokens, responsive layouts)
- Frontend development in React, TypeScript, and Tailwind CSS
- 3D character modelling and rigging in Blender
- AI-assisted animation pipeline via ComfyUI
- Asset production in Affinity
- Performance optimisation, accessibility, and deployment

![Personal Website project showcase](/mockup_personal_website2.webp)
  `.trim(),
    },
  },
  {
    slug: "tokize",
    title: "Tokize",
    summary:
      "A crypto-focused WordPress platform with custom Gutenberg blocks, live coin data via CoinMarketCap API, exchange reviews, and SEO-optimised guides for both beginner and experienced investors.",
    thumbnail: "/mockup_Tokize.webp",
    thumbnailVideo: "/project-tokize_scroll_video.webp",
    bannerImage: "/mockup_Tokize.webp",
    tags: ["WordPress", "PHP", "Gutenberg", "CoinMarketCap API", "SEO", "Custom Theme"],
    externalUrl: "https://www.tokize.com/",
    github: null,
    hasSubpage: true,
    sidebar: {
      type: "Crypto Reference Platform",
      role: "Frontend Developer",
      company: "Visca Web",
      siteUrl: "https://www.tokize.com/",
    },
    details: {
      overview: `
  Tokize is a crypto reference platform designed to help both beginner and experienced investors navigate the digital asset space. The site centralises exchange reviews and comparisons, practical guides on wallets, staking, and DeFi, and live market data, all in one place.
  
  The project was built at Visca Web on a fully custom WordPress theme, with a component-driven approach using custom Gutenberg blocks built from scratch. This gave the editorial team full flexibility to compose pages and content types.
  
  Live coin performance data is pulled via the CoinMarketCap API, surfacing real-time rankings, price movements, and market metrics directly within the site. This required careful integration work to keep data fresh, performant, and reliably rendered across different content contexts.
  
  SEO was a core pillar of the build, structured around topic clusters, schema markup, and a content architecture designed to rank for high-intent crypto queries.
  
  ### What I owned
  - Custom WordPress theme development
  - Custom Gutenberg blocks built from scratch
  - CoinMarketCap API integration for live coin data and performance listings
  - SEO architecture, schema markup, and on-page optimisation
  - UX/UI implementation from design through to production
  - Performance optimisation and ongoing maintenance during my time at the company
      `.trim(),
    },
  },
  {
    slug: "terminix",
    title: "Terminix Canada",
    summary:
      "Consolidated six regional pest control websites into one national WordPress platform with local SEO and custom content strategy.",
    thumbnail: "/mockup_terminix.webp",
    thumbnailVideo: "/project-terminix_scroll_video.webp",
    bannerImage: "/project-terminix_banner.webp",
    tags: ["WordPress", "PHP", "ACF", "Local SEO", "Performance Optimization"],
    externalUrl: "https://www.terminix.ca/",
    github: null,
    hasSubpage: true,
    hiddenFromGrid: true,
    sidebar: {
      type: "National Multi-Region Platform",
      role: "Frontend Developer",
      company: "Terminix Canada",
      siteUrl: "https://www.terminix.ca/",
    },
    details: {
      overview: `
The project unified six previously separate regional sites into a single national platform. The challenge was to retain **local relevance** while reducing maintenance overhead and creating a stronger, consistent brand experience.

I implemented reusable WordPress template patterns and structured content modules so marketing and local teams could manage pages efficiently. This improved publishing speed and made SEO updates scalable across regions.

The result was a cleaner architecture, faster content operations, and measurable business growth through improved discoverability and conversion quality.

### Outcomes

- 505% increase in organic traffic year over year.
- 395% increase in qualified lead volume.
- 1,800% growth in top-10 keyword rankings.

![Terminix Canada project showcase](/mockup_terminix.webp)
      `.trim(),
    },
  },{
    slug: "merry-maids-canada",
    title: "Merry Maids Canada",
    summary:
      "Migrated a nationwide franchise network from legacy PHP into a reusable WordPress master template deployed across 40+ location sites, with local SEO and custom content for each.",
    thumbnail: "/mockup_merrymaids.webp",
    thumbnailVideo: "/project-merrymaids_scroll_video.webp",
    bannerImage: "/mockup_merrymaids.webp",
    tags: ["WordPress", "PHP", "Multi-site", "Local SEO", "Accessibility"],
    externalUrl: "https://www.merrymaids.ca/",
    github: null,
    hasSubpage: true,
    sidebar: {
      type: "Franchise Platform, 40+ Sites",
      role: "Frontend Developer",
      company: "Merry Maids Canada",
      siteUrl: "https://www.merrymaids.ca/",
    },
    details: {
      overview: `
  Merry Maids Canada is a nationwide network of home cleaning franchises operating across dozens of Canadian locations. Each franchise needed its own web presence: locally relevant, independently manageable, but visually consistent and on-brand.
  
  The starting point was a fragmented set of legacy sites built in a PHP library. The agency's strategy was to migrate all content into WordPress and rebuild the entire network around a single master template, reducing technical debt, unifying the brand experience, and making local SEO scalable.
  
  I was responsible for building that master template from the ground up, as well as developing and customising each of the 40+ individual location sites. Every site shared the same architecture and design system, while allowing location-specific content, imagery, and SEO metadata to be managed independently by non-technical staff.
  
  ### What I owned
  - Custom WordPress master template design and development
  - UX/UI improvements over the legacy site experience
  - Individual location site builds with localised content
  - Technical SEO implementation across all locations
  - Content migration from the legacy PHP platform
  - Ongoing maintenance and updates
  
  ### Outcomes
  - 40+ location sites launched from a single maintainable codebase
  - Faster content operations for both the agency and franchise owners
  - Improved local search visibility through structured SEO implementation across all locations
      `.trim(),
    },
  },
]

export const visibleProjects: Project[] = projects.filter((project) => !project.hiddenFromGrid)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
