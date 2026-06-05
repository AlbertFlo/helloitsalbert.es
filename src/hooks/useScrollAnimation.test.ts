import { render, act } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { createElement } from "react"
import { useScrollAnimation } from "./useScrollAnimation"

type IntersectionCallback = (entries: IntersectionObserverEntry[]) => void

let intersectionCallback: IntersectionCallback | null = null

beforeEach(() => {
  intersectionCallback = null

  class MockIntersectionObserver {
    constructor(cb: IntersectionCallback) {
      intersectionCallback = cb
    }
    observe = vi.fn()
    disconnect = vi.fn()
  }

  vi.stubGlobal("IntersectionObserver", MockIntersectionObserver)
})

function TestComponent({ onVisible }: { onVisible: (v: boolean) => void }) {
  const { ref, isVisible } = useScrollAnimation()
  onVisible(isVisible)
  return createElement("div", { ref })
}

describe("useScrollAnimation", () => {
  it("starts not visible", () => {
    let visible = true
    render(createElement(TestComponent, { onVisible: (v) => { visible = v } }))
    expect(visible).toBe(false)
  })

  it("becomes visible when element intersects", () => {
    let visible = false
    render(createElement(TestComponent, { onVisible: (v) => { visible = v } }))

    act(() => {
      intersectionCallback?.([{ isIntersecting: true } as IntersectionObserverEntry])
    })

    expect(visible).toBe(true)
  })

  it("stays not visible when entry is not intersecting", () => {
    let visible = false
    render(createElement(TestComponent, { onVisible: (v) => { visible = v } }))

    act(() => {
      intersectionCallback?.([{ isIntersecting: false } as IntersectionObserverEntry])
    })

    expect(visible).toBe(false)
  })
})
