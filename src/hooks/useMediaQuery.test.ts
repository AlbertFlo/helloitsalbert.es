import { renderHook, act } from "@testing-library/react"
import { describe, it, expect, vi, beforeEach } from "vitest"
import { useMediaQuery } from "./useMediaQuery"

type ChangeHandler = (e: MediaQueryListEvent) => void

let fireChange: (matches: boolean) => void

function mockMatchMedia(initialMatches: boolean) {
  const handlers: ChangeHandler[] = []

  fireChange = (matches: boolean) => {
    handlers.forEach((h) => h({ matches } as MediaQueryListEvent))
  }

  vi.stubGlobal("matchMedia", vi.fn(() => ({
    matches: initialMatches,
    addEventListener: vi.fn((_: string, h: ChangeHandler) => handlers.push(h)),
    removeEventListener: vi.fn(),
  })))
}

beforeEach(() => {
  vi.restoreAllMocks()
})

describe("useMediaQuery", () => {
  it("returns true when the query initially matches", () => {
    mockMatchMedia(true)
    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"))
    expect(result.current).toBe(true)
  })

  it("returns false when the query does not initially match", () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"))
    expect(result.current).toBe(false)
  })

  it("updates to true when a matching change event fires", () => {
    mockMatchMedia(false)
    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"))

    act(() => fireChange(true))

    expect(result.current).toBe(true)
  })

  it("updates to false when a non-matching change event fires", () => {
    mockMatchMedia(true)
    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"))

    act(() => fireChange(false))

    expect(result.current).toBe(false)
  })
})
