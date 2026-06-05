import { describe, it, expect } from "vitest"
import { projects, getProjectBySlug } from "./projects"

describe("getProjectBySlug", () => {
  it("returns the correct project for a known slug", () => {
    const project = getProjectBySlug("personal-website")
    expect(project).toBeDefined()
    expect(project?.title).toBe("Personal Website")
  })

  it("returns undefined for an unknown slug", () => {
    expect(getProjectBySlug("does-not-exist")).toBeUndefined()
  })

  it("returns the correct project for each slug in the list", () => {
    projects.forEach((p) => {
      expect(getProjectBySlug(p.slug)).toBe(p)
    })
  })
})

describe("projects data", () => {
  it("every project has required fields", () => {
    projects.forEach((p) => {
      expect(p.slug).toBeTruthy()
      expect(p.title).toBeTruthy()
      expect(p.summary).toBeTruthy()
      expect(p.thumbnail).toBeTruthy()
      expect(p.bannerImage).toBeTruthy()
      expect(Array.isArray(p.tags)).toBe(true)
      expect(p.tags.length).toBeGreaterThan(0)
      expect(typeof p.hasSubpage).toBe("boolean")
    })
  })

  it("every project with hasSubpage:true has a details overview", () => {
    projects.filter((p) => p.hasSubpage).forEach((p) => {
      expect(p.details?.overview).toBeTruthy()
    })
  })

  it("slugs are unique", () => {
    const slugs = projects.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })
})
