import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, beforeEach } from "vitest"
import Contact from "./Contact"

vi.mock("@/hooks/useScrollAnimation", () => ({
  useScrollAnimation: () => ({ ref: { current: null }, isVisible: true }),
}))

vi.mock("@/services/email", () => ({
  sendContactEmail: vi.fn(),
}))

import { sendContactEmail } from "@/services/email"
const mockSend = vi.mocked(sendContactEmail)

beforeEach(() => {
  vi.clearAllMocks()
})

async function fillAndSubmit() {
  const user = userEvent.setup()
  render(<Contact />)

  await user.type(screen.getByLabelText("Name"), "Albert")
  await user.type(screen.getByLabelText("Email"), "a@test.com")
  await user.type(screen.getByLabelText("Message"), "Hello there")
  await user.click(screen.getByRole("button", { name: "Send Message" }))
}

describe("Contact form", () => {
  it("renders all form fields and the submit button", () => {
    render(<Contact />)
    expect(screen.getByLabelText("Name")).toBeInTheDocument()
    expect(screen.getByLabelText("Email")).toBeInTheDocument()
    expect(screen.getByLabelText("Message")).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Send Message" })).toBeInTheDocument()
  })

  it("shows 'Sending...' while the request is in flight", async () => {
    mockSend.mockImplementation(() => new Promise(() => {}))
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText("Name"), "Albert")
    await user.type(screen.getByLabelText("Email"), "a@test.com")
    await user.type(screen.getByLabelText("Message"), "Hello")
    await user.click(screen.getByRole("button", { name: "Send Message" }))

    expect(screen.getByRole("button", { name: "Sending..." })).toBeDisabled()
  })

  it("shows the success message after a successful send", async () => {
    mockSend.mockResolvedValue({ ok: true })
    await fillAndSubmit()

    await waitFor(() => {
      expect(screen.getByText(/Message sent successfully/i)).toBeInTheDocument()
    })
  })

  it("clears the form fields after a successful send", async () => {
    mockSend.mockResolvedValue({ ok: true })
    await fillAndSubmit()

    await waitFor(() => {
      expect(screen.getByLabelText<HTMLInputElement>("Name").value).toBe("")
      expect(screen.getByLabelText<HTMLInputElement>("Email").value).toBe("")
      expect(screen.getByLabelText<HTMLTextAreaElement>("Message").value).toBe("")
    })
  })

  it("shows the error message after a failed send", async () => {
    mockSend.mockResolvedValue({ ok: false, error: "Service unavailable" })
    await fillAndSubmit()

    await waitFor(() => {
      expect(screen.getByText(/Failed to send message/i)).toBeInTheDocument()
    })
  })

  it("re-enables the button after the request completes", async () => {
    mockSend.mockResolvedValue({ ok: true })
    await fillAndSubmit()

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Send Message" })).not.toBeDisabled()
    })
  })
})
