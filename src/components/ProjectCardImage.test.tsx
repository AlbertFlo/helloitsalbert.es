import { render, screen } from "@testing-library/react"
import { describe, it, expect } from "vitest"
import ProjectCardImage from "./ProjectCardImage"

describe("ProjectCardImage", () => {
  it("renders the thumbnail with correct alt text", () => {
    render(<ProjectCardImage thumbnail="/project.jpg" alt="Test project" />)
    expect(screen.getByAltText("Test project")).toBeInTheDocument()
  })

  it("renders only one image when no thumbnailVideo is provided", () => {
    const { container } = render(<ProjectCardImage thumbnail="/project.jpg" alt="Test project" />)
    expect(container.querySelectorAll("img")).toHaveLength(1)
  })

  it("renders a second image when thumbnailVideo is provided", () => {
    const { container } = render(
      <ProjectCardImage
        thumbnail="/project.jpg"
        thumbnailVideo="/project.webp"
        alt="Test project"
      />
    )
    expect(container.querySelectorAll("img")).toHaveLength(2)
  })
})
