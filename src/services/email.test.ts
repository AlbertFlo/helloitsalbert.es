import { describe, it, expect, vi, beforeEach } from "vitest"
import { sendContactEmail } from "./email"

const payload = { name: "Albert", email: "a@test.com", message: "Hello" }

beforeEach(() => {
  vi.restoreAllMocks()
})

describe("sendContactEmail", () => {
  it("returns ok:true on a successful response", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    }))

    const result = await sendContactEmail(payload)

    expect(result).toEqual({ ok: true })
  })

  it("sends a POST to the correct endpoint with JSON body", async () => {
    const mockFetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({}),
    })
    vi.stubGlobal("fetch", mockFetch)

    await sendContactEmail(payload)

    expect(mockFetch).toHaveBeenCalledWith(
      "/.netlify/functions/send-email",
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    )
  })

  it("returns ok:false with the server error when response is not ok", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({ error: "Service unavailable" }),
    }))

    const result = await sendContactEmail(payload)

    expect(result).toEqual({ ok: false, error: "Service unavailable" })
  })

  it("falls back to 'Unknown error' when server returns no error field", async () => {
    vi.stubGlobal("fetch", vi.fn().mockResolvedValue({
      ok: false,
      json: async () => ({}),
    }))

    const result = await sendContactEmail(payload)

    expect(result).toEqual({ ok: false, error: "Unknown error" })
  })

  it("returns ok:false with 'Network error' when fetch throws", async () => {
    vi.stubGlobal("fetch", vi.fn().mockRejectedValue(new Error("Failed to fetch")))

    const result = await sendContactEmail(payload)

    expect(result).toEqual({ ok: false, error: "Network error" })
  })
})
