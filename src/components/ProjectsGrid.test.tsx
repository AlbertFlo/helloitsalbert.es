import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ProjectsGrid from './ProjectsGrid'
import { projects } from '@/data/projects'

vi.mock('@/hooks/useScrollAnimation', () => ({
    useScrollAnimation: () => ({ ref: { current: null }, isVisible: true }),
}))

function renderGrid(props?: React.ComponentProps<typeof ProjectsGrid>) {
    return render(
        <MemoryRouter>
            <ProjectsGrid {...props} />
        </MemoryRouter>
    )
}

describe('ProjectsGrid', () => {
    it('renders all projects when no activeProject is passed', () => {
        renderGrid()
        projects.forEach((p) => {
            expect(screen.getByText(p.title)).toBeInTheDocument()
        })
    })

    it('excludes the activeProject from the grid', () => {
        const excluded = projects[0]
        renderGrid({ activeProject: excluded })

        expect(screen.queryByText(excluded.title)).not.toBeInTheDocument()
        projects.slice(1).forEach((p) => {
            expect(screen.getByText(p.title)).toBeInTheDocument()
        })
    })

    it('renders one fewer project card when activeProject is provided', () => {
        const { container: withActive } = renderGrid({
            activeProject: projects[0],
        })
        const { container: withoutActive } = renderGrid()

        const countWith = withActive.querySelectorAll('img[alt]').length
        const countWithout = withoutActive.querySelectorAll('img[alt]').length

        expect(countWith).toBe(countWithout - 1)
    })

    it("renders 'View Project' links for projects that have a subpage", () => {
        renderGrid()
        const viewLinks = screen.getAllByText('View Project')
        const subpageCount = projects.filter((p) => p.hasSubpage).length
        expect(viewLinks).toHaveLength(subpageCount)
    })
})
